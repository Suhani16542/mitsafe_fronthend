import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { BlogCategory } from "@/types/adminBlog";

const CATEGORIES_FILE_PATH = path.join(process.cwd(), "src", "data", "categories.json");

function readStoredCategories(): BlogCategory[] {
  try {
    if (fs.existsSync(CATEGORIES_FILE_PATH)) {
      const fileData = fs.readFileSync(CATEGORIES_FILE_PATH, "utf-8");
      const parsed = JSON.parse(fileData);
      if (Array.isArray(parsed)) {
        return parsed.map((c: any, index: number) => {
          const rawCount = Number(c?.count);
          const safeCount = Number.isFinite(rawCount) && rawCount >= 0 ? rawCount : 0;
          return {
            id: c.id || `cat-${index}`,
            name: String(c.name || "Untitled").trim(),
            slug: String(c.slug || "").trim(),
            description: String(c.description || "").trim(),
            count: safeCount,
            status: c.status === "inactive" ? ("inactive" as const) : ("active" as const),
            createdAt: c.createdAt || new Date().toISOString().split("T")[0],
          };
        });
      }
    }
  } catch (err) {
    console.error("[API Categories] Error reading categories.json:", err);
  }
  return [];
}

function saveStoredCategories(categories: BlogCategory[]): boolean {
  try {
    const dir = path.dirname(CATEGORIES_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CATEGORIES_FILE_PATH, JSON.stringify(categories, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("[API Categories] Error writing categories.json:", err);
    return false;
  }
}

/**
 * Fetch distinct live categories from external backend API if reachable
 */
async function fetchRemoteBackendCategories(): Promise<string[]> {
  const backendBase =
    process.env.BACKEND_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "https://mitsafe-backend.onrender.com";

  try {
    const adminKey =
      process.env.NEXT_PUBLIC_BLOG_ADMIN_KEY ||
      process.env.NEXT_PUBLIC_BLOG_ADMIN_API_KEY ||
      "hyikhgt6drewa2drhjj555";

    const res = await fetch(`${backendBase.replace(/\/+$/, "")}/api/v1/blogs/categories`, {
      method: "GET",
      headers: {
        "x-blog-admin-key": adminKey,
      },
      next: { revalidate: 0 },
    });

    if (res.ok) {
      const json = await res.json();
      if (json && Array.isArray(json.data)) {
        return json.data.map((c: any) => (typeof c === "string" ? c.trim() : c?.name ? String(c.name).trim() : "")).filter(Boolean);
      }
    }
  } catch {
    // Backend offline or unreachable, will use stored categories
  }
  return [];
}

// GET /api/categories
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const isDropdown = searchParams.get("type") === "dropdown" || searchParams.get("activeOnly") === "true";

  // Read stored categories
  const storedCategories = readStoredCategories();

  // Fetch remote backend categories from live database
  const remoteNames = await fetchRemoteBackendCategories();

  // Merge remote categories into stored categories if any remote category is missing
  let mergedCategories = [...storedCategories];
  let hasNew = false;

  for (const remoteName of remoteNames) {
    const exists = mergedCategories.some(
      (c) => c.name.toLowerCase() === remoteName.toLowerCase() || c.slug.toLowerCase() === remoteName.toLowerCase()
    );
    if (!exists) {
      const newCat: BlogCategory = {
        id: `cat-${remoteName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")}`,
        name: remoteName,
        slug: remoteName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
        description: "",
        count: 0,
        status: "active",
        createdAt: new Date().toISOString().split("T")[0],
      };
      mergedCategories.push(newCat);
      hasNew = true;
    }
  }

  if (hasNew) {
    saveStoredCategories(mergedCategories);
  }

  // If requesting dropdown format, return active string names only
  if (isDropdown) {
    const activeNames = mergedCategories
      .filter((c) => c.status === "active")
      .map((c) => c.name.trim())
      .filter(Boolean);

    return NextResponse.json({
      success: true,
      data: Array.from(new Set(activeNames)),
    });
  }

  return NextResponse.json({
    success: true,
    data: mergedCategories,
  });
}

// POST /api/categories - Create Category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, description, status } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Category name is required" },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const generatedSlug = (slug || trimmedName)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const storedCategories = readStoredCategories();

    // Check duplicate
    const existingIndex = storedCategories.findIndex(
      (c) => c.name.toLowerCase() === trimmedName.toLowerCase() || c.slug.toLowerCase() === generatedSlug.toLowerCase()
    );

    if (existingIndex >= 0) {
      // If category exists, reactivate and update
      storedCategories[existingIndex] = {
        ...storedCategories[existingIndex],
        name: trimmedName,
        slug: generatedSlug,
        description: description !== undefined ? description : storedCategories[existingIndex].description,
        status: status || "active",
      };
      saveStoredCategories(storedCategories);
      return NextResponse.json({
        success: true,
        data: storedCategories[existingIndex],
        message: "Category updated successfully",
      });
    }

    const newCategory: BlogCategory = {
      id: `cat-${Date.now()}-${generatedSlug}`,
      name: trimmedName,
      slug: generatedSlug,
      description: (description || "").trim(),
      count: 0,
      status: status === "inactive" ? "inactive" : "active",
      createdAt: new Date().toISOString().split("T")[0],
    };

    storedCategories.unshift(newCategory);
    const saved = saveStoredCategories(storedCategories);

    if (!saved) {
      return NextResponse.json(
        { success: false, message: "Failed to persist category to disk" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: newCategory,
      message: "Category created successfully",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to process category creation" },
      { status: 500 }
    );
  }
}

// PUT /api/categories - Update Category
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, slug, description, status } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Category ID is required for update" },
        { status: 400 }
      );
    }

    const storedCategories = readStoredCategories();
    const targetIdx = storedCategories.findIndex((c) => c.id === id || c.slug === id);

    if (targetIdx === -1) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }

    const current = storedCategories[targetIdx];
    storedCategories[targetIdx] = {
      ...current,
      name: name !== undefined ? String(name).trim() : current.name,
      slug: slug !== undefined ? String(slug).trim() : current.slug,
      description: description !== undefined ? String(description).trim() : current.description,
      status: status !== undefined ? (status === "inactive" ? "inactive" : "active") : current.status,
    };

    saveStoredCategories(storedCategories);

    return NextResponse.json({
      success: true,
      data: storedCategories[targetIdx],
      message: "Category updated successfully",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to update category" },
      { status: 500 }
    );
  }
}

// DELETE /api/categories - Delete Category
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let id = searchParams.get("id");

    if (!id) {
      try {
        const body = await request.json();
        id = body?.id;
      } catch {
        // no body
      }
    }

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Category ID is required for deletion" },
        { status: 400 }
      );
    }

    const storedCategories = readStoredCategories();
    const filtered = storedCategories.filter((c) => c.id !== id && c.slug !== id);

    saveStoredCategories(filtered);

    return NextResponse.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to delete category" },
      { status: 500 }
    );
  }
}
