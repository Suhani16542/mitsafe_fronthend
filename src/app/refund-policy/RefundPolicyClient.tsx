"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Ban,
  Briefcase,
  ClipboardCheck,
  History,
  XCircle,
  HelpCircle,
  Scale,
  Clock,
  Calendar,
  Globe,
  TrendingUp,
  Calculator,
  Mail,
  Percent,
  FileText,
  CreditCard,
  Receipt,
  AlertCircle,
  FileEdit,
  Target,
  Code,
  FolderCheck,
  Hourglass,
  FileSpreadsheet,
  CheckCircle2,
  Bookmark,
  Award,
  Search,
  ArrowRight,
  Link2,
  FileCheck,
  Check
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SectionItem {
  id: string;
  sectionNum: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  contentNodes: React.ReactNode;
}

export default function RefundPolicyClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const sectionsData: SectionItem[] = useMemo(
    () => [
      {
        id: "introduction",
        sectionNum: 1,
        title: "1. INTRODUCTION",
        icon: ShieldCheck,
        summary:
          "Modern Technology & Modern Ventures Group provides technology, digital marketing and business solutions to clients across various industries.",
        contentNodes: (
          <div className="space-y-4">
            <p>Our services may include, but are not limited to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
              {[
                "Website Design & Development",
                "Web Application Development",
                "Mobile Application Development",
                "Software Development",
                "SEO (Search Engine Optimization)",
                "Social Media Optimization",
                "Digital Marketing",
                "Performance Marketing",
                "Paid Advertising Management",
                "Content Creation",
                "Graphic Design",
                "Maintenance & Support",
                "API Integration",
                "Consulting",
                "Technology Solutions",
                "Other customized professional services"
              ].map((srv, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white/70 border border-slate-200/80 rounded-xl px-3 py-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#305EFF] shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
            <p>
              This <strong>Refund, Cancellation & Settlement Policy</strong> has been established to clearly define the terms applicable to payments, project milestones, service periods, cancellations, refunds and third-party advertising expenditure.
            </p>
            <p className="p-3.5 bg-blue-50/70 border border-blue-200/70 rounded-xl text-xs sm:text-sm text-blue-900 font-medium">
              By approving a quotation/proposal, making a payment, confirming a project, granting access, or allowing work to commence, the client acknowledges and agrees to the terms of this policy.
            </p>
          </div>
        )
      },
      {
        id: "milestone-service-structure",
        sectionNum: 2,
        title: "2. MILESTONE-BASED SERVICE STRUCTURE",
        icon: Layers,
        summary:
          "Most of our services are provided on a milestone-based, project-based or service-period basis.",
        contentNodes: (
          <div className="space-y-3.5">
            <p>Depending on the nature of the engagement, a project may be divided into multiple milestones, such as:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-2">
              {[
                "Project initiation",
                "Planning",
                "UI/UX design",
                "Development",
                "Testing",
                "Deployment",
                "SEO implementation",
                "Content development",
                "Digital marketing campaigns",
                "Social media management",
                "Advertising campaigns",
                "Maintenance",
                "Other mutually agreed stages"
              ].map((stage, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white border border-slate-200/80 rounded-lg px-2.5 py-1.5 font-medium">
                  <span className="text-[#305EFF] font-bold">✓</span> {stage}
                </div>
              ))}
            </div>
            <p>
              Each milestone has a corresponding professional service charge based on the scope of work, resources required, estimated time and deliverables.
            </p>
            <p className="font-semibold text-slate-900">
              Once a particular milestone or service period has commenced, the corresponding fee is considered allocated toward the execution of that service.
            </p>
          </div>
        )
      },
      {
        id: "standard-no-refund-policy",
        sectionNum: 3,
        title: "3. STANDARD NO-REFUND POLICY",
        icon: Ban,
        summary:
          "ALL SERVICE FEES ARE NON-REFUNDABLE AFTER THE RELEVANT SERVICE, MILESTONE OR SERVICE PERIOD HAS COMMENCED.",
        contentNodes: (
          <div className="space-y-3">
            <div className="p-4 bg-red-50/80 border border-red-200 rounded-2xl text-red-900 font-extrabold text-sm sm:text-base">
              ALL SERVICE FEES ARE NON-REFUNDABLE AFTER THE RELEVANT SERVICE, MILESTONE OR SERVICE PERIOD HAS COMMENCED.
            </div>
            <p>This policy applies to professional services including, but not limited to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
              <li>Website development &amp; designing</li>
              <li>Software development</li>
              <li>Mobile application development</li>
              <li>SEO &amp; Social media optimization</li>
              <li>Digital marketing &amp; Performance marketing</li>
              <li>Content creation &amp; Graphic designing</li>
              <li>Consulting &amp; Maintenance</li>
              <li>Technical &amp; API/integration services</li>
              <li>Other customized services</li>
            </ul>
            <p>
              Once the relevant work or service has commenced, the amount paid toward that milestone or service period will generally be <strong>non-refundable</strong>.
            </p>
          </div>
        )
      },
      {
        id: "why-fees-non-refundable",
        sectionNum: 4,
        title: "4. WHY SERVICE FEES ARE NON-REFUNDABLE",
        icon: Briefcase,
        summary:
          "When a client confirms a project or service, Modern Technology & Modern Ventures Group may immediately allocate dedicated professional resources.",
        contentNodes: (
          <div className="space-y-3">
            <p>Resources committed specifically for the client's project include:</p>
            <div className="flex flex-wrap gap-2 my-2">
              {[
                "Developers",
                "Designers",
                "SEO professionals",
                "Digital marketing specialists",
                "Content creators",
                "Project managers",
                "Technical resources",
                "Advertising specialists",
                "Software & Tools",
                "Infrastructure",
                "Research resources",
                "Development time",
                "Creative resources"
              ].map((res, i) => (
                <span key={i} className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded-lg">
                  {res}
                </span>
              ))}
            </div>
            <p>
              These resources may be reserved specifically for the client's project. Therefore, once work has commenced, the associated service fee represents professional time, resources, planning, execution and other commitments made for the project.
            </p>
            <p className="font-semibold text-slate-900">
              For this reason, service fees are generally non-refundable after commencement of the relevant milestone or service period.
            </p>
          </div>
        )
      },
      {
        id: "milestone-payment-policy",
        sectionNum: 5,
        title: "5. MILESTONE PAYMENT POLICY",
        icon: ClipboardCheck,
        summary:
          "Where a project is divided into milestones, each milestone shall be treated as a separate stage of the project.",
        contentNodes: (
          <div className="space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-2">
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-center">
                <span className="text-[11px] font-bold text-[#305EFF] uppercase block">Milestone 1</span>
                <span className="text-xs font-bold text-slate-900">Planning / Design</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-center">
                <span className="text-[11px] font-bold text-[#305EFF] uppercase block">Milestone 2</span>
                <span className="text-xs font-bold text-slate-900">Development</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-center">
                <span className="text-[11px] font-bold text-[#305EFF] uppercase block">Milestone 3</span>
                <span className="text-xs font-bold text-slate-900">Testing</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-xl text-center">
                <span className="text-[11px] font-bold text-[#305EFF] uppercase block">Milestone 4</span>
                <span className="text-xs font-bold text-slate-900">Deployment</span>
              </div>
            </div>
            <p>If the client decides to cancel or discontinue the project after a particular milestone has commenced:</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
              <li>Completed milestones remain payable.</li>
              <li>Payments against completed milestones are non-refundable.</li>
              <li>Work already performed cannot be reversed.</li>
              <li>Resources already allocated remain chargeable.</li>
              <li>Third-party expenses already incurred remain subject to their respective policies.</li>
              <li>Any pending amount related to completed work shall remain payable.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 italic">
              Future milestones that have not yet commenced may be reviewed separately by management.
            </p>
          </div>
        )
      },
      {
        id: "monthly-recurring-services",
        sectionNum: 6,
        title: "6. MONTHLY & RECURRING SERVICES",
        icon: History,
        summary:
          "For recurring services, the applicable fee relates to the agreed service period and is non-refundable once commenced.",
        contentNodes: (
          <div className="space-y-3">
            <p>For recurring services such as: SEO, Social Media Management, Digital Marketing, Performance Marketing, Website Maintenance, Content Marketing, Advertising Management, Consulting, and other monthly services:</p>
            <p>
              The applicable fee relates to the agreed service period. Once the monthly service period has commenced, the applicable monthly fee is generally <strong>non-refundable</strong>.
            </p>
            <p className="p-3 bg-slate-100 rounded-xl text-xs sm:text-sm text-slate-800 font-semibold">
              This applies even if the client subsequently chooses not to utilize all available activities during that service period.
            </p>
          </div>
        )
      },
      {
        id: "client-initiated-cancellation",
        sectionNum: 7,
        title: "7. CLIENT-INITIATED CANCELLATION",
        icon: XCircle,
        summary:
          "Voluntary client cancellation or pausing of services does not automatically create a right to a refund.",
        contentNodes: (
          <div className="space-y-3">
            <p>
              If the client voluntarily chooses to cancel the project, pause the project, discontinue the service, change the business strategy, change the requirements, reduce the budget, stop marketing activities, or move the project to another provider after the relevant service or milestone has commenced, such decision does not automatically create a right to a refund.
            </p>
            <p className="font-semibold text-slate-900">
              All completed work, commenced milestones, allocated resources and applicable third-party expenses remain subject to payment and settlement.
            </p>
          </div>
        )
      },
      {
        id: "change-of-mind",
        sectionNum: 8,
        title: "8. CHANGE OF MIND",
        icon: HelpCircle,
        summary:
          "A client's change of mind or internal strategy revision does not automatically qualify for a refund.",
        contentNodes: (
          <div className="space-y-3">
            <p>
              A client's change of mind, change in business requirements, internal business decision, budget revision or decision to discontinue a project does not automatically qualify for a refund after commencement of the relevant work.
            </p>
            <p>
              Any exception shall be considered solely under the <strong>Exceptional Refund &amp; Settlement Process</strong> described below.
            </p>
          </div>
        )
      },
      {
        id: "exceptional-refund-policy",
        sectionNum: 9,
        title: "9. EXCEPTIONAL REFUND POLICY",
        icon: Scale,
        summary:
          "Although standard policy is No Refund After Commencement, management may, at its sole discretion, consider an exceptional refund request in specific circumstances.",
        contentNodes: (
          <div className="space-y-3.5">
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-xs sm:text-sm font-bold">
              Any exceptional refund must be reviewed and expressly approved by authorized management in writing.
            </div>
            <p>A refund shall not be considered automatically applicable merely because the client requests cancellation.</p>
            <p>Management may consider:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
              <li>Amount of work completed</li>
              <li>Project stage</li>
              <li>Resources utilized &amp; allocated</li>
              <li>Third-party expenses &amp; amount spent</li>
              <li>Amount remaining</li>
              <li>Nature of the service &amp; project circumstances</li>
              <li>Contractual obligations</li>
              <li>Other relevant financial and operational factors</li>
            </ul>
            <p className="text-slate-900 font-semibold">The final decision will be communicated to the client in writing.</p>
          </div>
        )
      },
      {
        id: "refund-approval-not-immediate",
        sectionNum: 10,
        title: "10. REFUND APPROVAL DOES NOT MEAN IMMEDIATE PAYMENT",
        icon: Clock,
        summary:
          "Approved exceptional refunds must undergo final financial reconciliation and verification before disbursement.",
        contentNodes: (
          <div className="space-y-3">
            <p>
              If management approves an exceptional refund, the approved amount will first go through the company's final reconciliation and settlement process.
            </p>
            <p>The company may require time to verify:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
              <li>Payments received</li>
              <li>Work completed &amp; Milestones</li>
              <li>Third-party expenses</li>
              <li>Advertising expenditure</li>
              <li>Taxes &amp; Payment processing charges</li>
              <li>Amounts utilized &amp; Outstanding liabilities</li>
              <li>Refunds received from third-party platforms</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Only after completion of this reconciliation will the final settlement amount be determined.
            </p>
          </div>
        )
      },
      {
        id: "settlement-period",
        sectionNum: 11,
        title: "11. EXCEPTIONAL REFUND SETTLEMENT PERIOD",
        icon: Calendar,
        summary:
          "Where management approves an exceptional refund, final settlement may take up to 2 months.",
        contentNodes: (
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl text-[#0052cc] font-extrabold text-sm sm:text-base">
              THE REFUND / FINAL SETTLEMENT MAY TAKE UP TO 2 MONTHS
              <span className="block text-xs font-normal text-slate-700 mt-1">
                from the date of final management approval and completion of the required reconciliation process.
              </span>
            </div>
            <p>This period may be required for:</p>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-700 list-disc list-inside">
              <li>Financial reconciliation &amp; Project settlement</li>
              <li>Third-party reconciliation &amp; Advertising account reconciliation</li>
              <li>Payment verification &amp; Internal approvals</li>
              <li>Banking/payment processing &amp; Final calculation of refundable amounts</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600">
              The settlement period will begin after the refund has been formally approved and the necessary reconciliation information is available.
            </p>
          </div>
        )
      },
      {
        id: "third-party-advertising-payments",
        sectionNum: 12,
        title: "12. THIRD-PARTY ADVERTISING PAYMENTS",
        icon: Globe,
        summary:
          "Advertising funds deposited for campaigns are distinct from professional service fees.",
        contentNodes: (
          <div className="space-y-3">
            <p>
              Modern Technology &amp; Modern Ventures Group may manage advertising campaigns through third-party platforms such as:
            </p>
            <div className="flex flex-wrap gap-2 my-2">
              {["Google Ads", "Meta Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Other advertising platforms"].map((ad, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-800 text-xs font-bold rounded-lg">
                  {ad}
                </span>
              ))}
            </div>
            <p>
              Money deposited toward advertising is distinct from the company's professional service fee. The treatment of advertising funds depends upon the actual status of the relevant third-party advertising account.
            </p>
          </div>
        )
      },
      {
        id: "ads-refund-policy",
        sectionNum: 13,
        title: "13. GOOGLE ADS / META ADS / LINKEDIN ADS REFUND POLICY",
        icon: TrendingUp,
        summary:
          "Advertising balances and spend are subject to the policies of the respective advertising platforms.",
        contentNodes: (
          <div className="space-y-3">
            <p>Where funds have been deposited, prepaid or transferred toward advertising campaigns, such funds may be:</p>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-700 list-disc list-inside">
              <li>Utilized by the advertising platform</li>
              <li>Available as an account balance</li>
              <li>Partially utilized</li>
              <li>Subject to third-party charges</li>
              <li>Eligible for refund according to platform policy</li>
              <li>Non-refundable according to platform policy</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Modern Technology &amp; Modern Ventures Group does not independently guarantee a refund of funds held or utilized by a third-party advertising platform. Any refund is subject to the applicable platform's rules, policies and actual account status.
            </p>
          </div>
        )
      },
      {
        id: "ad-refund-settlement",
        sectionNum: 14,
        title: "14. THIRD-PARTY ADVERTISING REFUND SETTLEMENT",
        icon: Calculator,
        summary:
          "If an advertising platform refunds an eligible unused amount, settlement is calculated on the actual amount received.",
        contentNodes: (
          <div className="space-y-3.5">
            <p>If an advertising platform refunds an eligible unused amount, the company will reconcile the amount actually received.</p>
            <div className="bg-slate-100/90 border border-slate-200 p-4 rounded-2xl space-y-1.5 text-xs sm:text-sm">
              <div className="font-bold text-slate-900">Example Scenario:</div>
              <div>• Advertising Amount Deposited: <span className="font-bold">₹1,00,000</span></div>
              <div>• Amount Used for Advertising: <span className="font-bold">₹70,000</span></div>
              <div>• Potential Remaining Balance: <span className="font-bold text-green-700">₹30,000</span></div>
            </div>
            <p>
              The final settlement will be based on the <strong>actual amount available/refunded by the third-party platform</strong>, after applicable adjustments, charges or deductions, where applicable.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              The company will not be responsible for any amount that a third-party platform refuses to refund under its own policies.
            </p>
          </div>
        )
      },
      {
        id: "final-settlement-email",
        sectionNum: 15,
        title: "15. FINAL SETTLEMENT EMAIL",
        icon: Mail,
        summary:
          "Formal settlement statements are communicated to the client via official email.",
        contentNodes: (
          <div className="space-y-3">
            <p>
              In the event that an exceptional refund or third-party advertising refund becomes applicable, Modern Technology &amp; Modern Ventures Group will communicate the final settlement details to the client through email.
            </p>
            <p>The settlement email may include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div>✓ Total amount received</div>
              <div>✓ Service charges &amp; completed milestones</div>
              <div>✓ Amount utilized &amp; Ad expenditure</div>
              <div>✓ Third-party refund received</div>
              <div>✓ Applicable adjustments &amp; approved refund</div>
              <div>✓ Final settlement amount &amp; payment details</div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              The client will be informed once the reconciliation process has been completed.
            </p>
          </div>
        )
      },
      {
        id: "ad-management-fees",
        sectionNum: 16,
        title: "16. ADVERTISING MANAGEMENT FEES",
        icon: Percent,
        summary:
          "Professional management fees are separate from actual ad spend and cover complete campaign execution.",
        contentNodes: (
          <div className="space-y-3">
            <p>Advertising management charges are separate from the actual advertising budget.</p>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl text-purple-950 font-extrabold text-sm sm:text-base">
              30% OF ACTUAL ADVERTISING SPEND
              <span className="block text-xs font-normal text-slate-700 mt-1">
                For paid campaigns, our professional management fee is calculated against the actual advertising spend.
              </span>
            </div>
            <p>This fee covers professional campaign management activities such as:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
              <span>• Campaign creation &amp; setup</span>
              <span>• Audience targeting</span>
              <span>• Campaign optimization &amp; monitoring</span>
              <span>• Performance analysis &amp; Ad management</span>
              <span>• Campaign adjustments</span>
              <span>• Creative coordination &amp; Reporting</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              The management fee is a professional service charge and is separate from the advertising amount paid to the respective advertising platform.
            </p>
          </div>
        )
      },
      {
        id: "advertising-example",
        sectionNum: 17,
        title: "17. ADVERTISING EXAMPLE",
        icon: FileText,
        summary:
          "Demonstration of advertising budget versus management fee calculation.",
        contentNodes: (
          <div className="space-y-3">
            <p>Suppose:</p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5 text-xs sm:text-sm">
              <div>• Advertising Budget: <span className="font-bold">₹50,000</span></div>
              <div>• Management Fee @ 30%: <span className="font-bold">₹15,000</span></div>
              <div className="pt-2 border-t border-slate-200 font-extrabold text-slate-900">
                Total: ₹50,000 Advertising Spend + ₹15,000 Management Fee = ₹65,000
              </div>
            </div>
            <p>
              If the advertising platform later refunds an unused amount, the refund calculation will be based on the actual amount refunded by the platform.
            </p>
            <p className="font-semibold text-slate-900">
              The campaign management fee will not automatically become refundable merely because an advertising campaign is stopped or an unused advertising balance is returned.
            </p>
          </div>
        )
      },
      {
        id: "unused-ad-balance",
        sectionNum: 18,
        title: "18. UNUSED ADVERTISING BALANCE",
        icon: CreditCard,
        summary:
          "Evaluation and treatment of unspent ad balance across platform accounts.",
        contentNodes: (
          <div className="space-y-3">
            <p>Where an unused balance remains in Google Ads, Meta Ads, LinkedIn Ads or another advertising account, the company will determine whether the balance is:</p>
            <ol className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
              <li>Refundable by the platform;</li>
              <li>Available for future campaigns;</li>
              <li>Already utilized;</li>
              <li>Subject to platform restrictions;</li>
              <li>Subject to applicable charges or adjustments.</li>
            </ol>
            <p className="font-medium text-slate-800">
              Where a third-party platform refunds the amount to the company, the company will process the applicable client settlement after reconciliation.
            </p>
          </div>
        )
      },
      {
        id: "taxes-processing-charges",
        sectionNum: 19,
        title: "19. TAXES & PAYMENT PROCESSING CHARGES",
        icon: Receipt,
        summary:
          "Non-recoverable statutory taxes and payment gateway transaction fees are excluded from refunds.",
        contentNodes: (
          <div className="space-y-3">
            <p>Where applicable, the following may be considered separately during a final settlement:</p>
            <div className="flex flex-wrap gap-2 my-2">
              {["GST/taxes", "Payment gateway charges", "Bank charges", "Transaction charges", "Currency conversion charges", "Third-party charges", "Non-refundable processing fees"].map((tax, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg">
                  {tax}
                </span>
              ))}
            </div>
            <p>
              Any such charges that cannot be recovered may be excluded from the refundable amount, subject to applicable law and the specific transaction.
            </p>
          </div>
        )
      },
      {
        id: "project-delays",
        sectionNum: 20,
        title: "20. PROJECT DELAYS",
        icon: AlertCircle,
        summary:
          "Delays caused by external factors or client dependency do not create refund eligibility.",
        contentNodes: (
          <div className="space-y-3">
            <p>A delay caused by the client or factors outside the company's reasonable control will not automatically create a right to a refund. Examples include:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs sm:text-sm text-slate-700 list-disc list-inside">
              <li>Delayed approvals</li>
              <li>Delayed feedback</li>
              <li>Delayed content</li>
              <li>Delayed account access</li>
              <li>Missing information</li>
              <li>Change requests</li>
              <li>Client-side technical issues</li>
              <li>Third-party dependencies</li>
              <li>Delays in receiving required materials</li>
            </ul>
            <p className="font-medium text-slate-900">The project timeline may be revised accordingly.</p>
          </div>
        )
      },
      {
        id: "change-requests",
        sectionNum: 21,
        title: "21. CHANGE REQUESTS",
        icon: FileEdit,
        summary:
          "Scope modifications and additional requirements are billed separately.",
        contentNodes: (
          <div className="space-y-3">
            <p>Any requirement that falls outside the originally agreed scope may be treated as an additional service.</p>
            <p>Additional work may require:</p>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-700 list-disc list-inside">
              <li>Additional charges</li>
              <li>Additional time</li>
              <li>Revised milestone</li>
              <li>Revised delivery schedule</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600">
              The client will be informed about applicable additional charges before execution wherever reasonably practicable.
            </p>
          </div>
        )
      },
      {
        id: "digital-marketing-seo-performance",
        sectionNum: 22,
        title: "22. DIGITAL MARKETING & SEO PERFORMANCE",
        icon: Target,
        summary:
          "Digital marketing and SEO performance depend on external search engine and platform algorithms.",
        contentNodes: (
          <div className="space-y-3">
            <p>
              Digital marketing and SEO results depend on numerous factors outside the direct control of the service provider. Therefore, unless specifically guaranteed in a separate written agreement, Modern Technology &amp; Modern Ventures Group does not guarantee:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
              <span>• Specific Google rankings</span>
              <span>• Specific keyword positions</span>
              <span>• Specific website traffic</span>
              <span>• Specific leads &amp; sales</span>
              <span>• Specific ROI</span>
              <span>• Specific followers &amp; views</span>
              <span>• Specific engagement</span>
              <span>• Specific conversion rates</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Performance may be affected by search engine algorithms, competition, market conditions, website quality, content, advertising budget, audience behavior, competitor activity, platform policies, and other external factors. Performance expectations do not create an automatic entitlement to a refund.
            </p>
          </div>
        )
      },
      {
        id: "website-software-projects",
        sectionNum: 23,
        title: "23. WEBSITE & SOFTWARE PROJECTS",
        icon: Code,
        summary:
          "Development charges are tied to milestone execution and progressive deliverable acceptance.",
        contentNodes: (
          <div className="space-y-3">
            <p>For website, software and application development projects, payments are linked to agreed milestones and deliverables.</p>
            <p>
              Once a development milestone has commenced, charges related to that milestone are generally non-refundable. This includes work such as:
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-800">
              {["UI/UX design", "Development", "Programming", "Database work", "API integration", "Testing", "Deployment", "Configuration", "Technical research", "Custom functionality"].map((item, i) => (
                <span key={i} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md font-medium">{item}</span>
              ))}
            </div>
            <p className="font-semibold text-slate-900">
              If the client discontinues the project after work has commenced, the completed/commenced milestone will be settled according to the agreed commercial terms.
            </p>
          </div>
        )
      },
      {
        id: "handover-after-cancellation",
        sectionNum: 24,
        title: "24. HANDOVER AFTER CANCELLATION",
        icon: FolderCheck,
        summary:
          "Deliverable handovers after project cancellation are provided subject to financial settlement.",
        contentNodes: (
          <div className="space-y-3">
            <p>
              Where applicable, after financial settlement and subject to the agreed terms, the company may provide the client with the deliverables completed up to the relevant stage.
            </p>
            <p className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 font-semibold">
              Any pending amount related to completed work must be cleared before final handover where such condition is applicable under the project agreement.
            </p>
          </div>
        )
      },
      {
        id: "under-utilization",
        sectionNum: 25,
        title: "25. NO AUTOMATIC REFUND FOR UNDER-UTILIZATION",
        icon: Hourglass,
        summary:
          "Under-utilization of active retainers or service capacity does not create a refund right.",
        contentNodes: (
          <div className="space-y-3">
            <p>
              If the client does not fully utilize the available services, deliverables or campaign capacity during an active service period, this will not automatically create a refund entitlement.
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              For example, if a client has an active monthly digital marketing or social media management package but does not provide timely content, approvals or instructions, the monthly service fee will remain applicable for the agreed service period.
            </p>
          </div>
        )
      },
      {
        id: "final-financial-reconciliation",
        sectionNum: 26,
        title: "26. FINAL FINANCIAL RECONCILIATION",
        icon: FileSpreadsheet,
        summary:
          "Structured reconciliation formula used to calculate final settlement amounts.",
        contentNodes: (
          <div className="space-y-3">
            <p>Before processing any approved refund or settlement, the company may prepare a final financial reconciliation covering:</p>
            <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-2 text-xs sm:text-sm font-mono shadow-md">
              <div className="text-green-400 font-bold">Total Amount Received</div>
              <div className="text-red-300">− Completed/Commenced Services</div>
              <div className="text-red-300">− Applicable Third-Party Expenses</div>
              <div className="text-red-300">− Advertising Expenditure</div>
              <div className="text-red-300">− Applicable Taxes/Charges</div>
              <div className="text-red-300">− Other Approved Project Expenses</div>
              <div className="pt-2 border-t border-slate-700 text-yellow-300 font-bold text-sm sm:text-base">
                = Final Settlement Amount
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              The exact calculation will depend upon the circumstances of the individual project.
            </p>
          </div>
        )
      },
      {
        id: "final-binding-settlement",
        sectionNum: 27,
        title: "27. FINAL & BINDING SETTLEMENT",
        icon: CheckCircle2,
        summary:
          "Processed settlements represent the full and definitive closure of project finances.",
        contentNodes: (
          <div className="space-y-3">
            <p>
              Once the final settlement has been approved and processed, the settlement shall represent the final financial reconciliation for the relevant service or project, subject to applicable law and any rights that cannot legally be waived.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Any additional claim relating to amounts already finally settled will be subject to the applicable agreement and governing law.
            </p>
          </div>
        )
      },
      {
        id: "policy-acceptance",
        sectionNum: 28,
        title: "28. POLICY ACCEPTANCE",
        icon: FileText,
        summary:
          "Engagement confirmation and project kick-off constitute full acceptance of this policy.",
        contentNodes: (
          <div className="space-y-3">
            <p>By:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
              <li>Approving a quotation</li>
              <li>Accepting a proposal</li>
              <li>Making payment</li>
              <li>Signing an agreement</li>
              <li>Confirming a project</li>
              <li>Providing project access</li>
              <li>Providing advertising account access</li>
              <li>Allowing work to commence</li>
            </ul>
            <p className="font-bold text-slate-900">
              the client acknowledges that they have read, understood and accepted this Refund, Cancellation &amp; Settlement Policy.
            </p>
          </div>
        )
      },
      {
        id: "quick-reference",
        sectionNum: 29,
        title: "29. QUICK REFERENCE",
        icon: Bookmark,
        summary:
          "Summary overview of key policy terms for quick client reference.",
        contentNodes: (
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                <span className="font-bold text-[#305EFF] block mb-1">SERVICE FEES</span>
                <p className="text-slate-700">Non-refundable after the relevant milestone/service has commenced.</p>
              </div>
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                <span className="font-bold text-[#305EFF] block mb-1">MILESTONE PROJECTS</span>
                <p className="text-slate-700">Each milestone is governed by its agreed scope and payment structure.</p>
              </div>
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                <span className="font-bold text-[#305EFF] block mb-1">MONTHLY SERVICES</span>
                <p className="text-slate-700">The applicable monthly fee is generally non-refundable once the service period has commenced.</p>
              </div>
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                <span className="font-bold text-[#305EFF] block mb-1">EXCEPTIONAL REFUND</span>
                <p className="text-slate-700">Only possible if specifically approved by authorized management in writing.</p>
              </div>
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                <span className="font-bold text-[#305EFF] block mb-1">APPROVED REFUND</span>
                <p className="text-slate-700">Final settlement may take up to 2 months after approval and completion of reconciliation.</p>
              </div>
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                <span className="font-bold text-[#305EFF] block mb-1">GOOGLE / META / LINKEDIN ADVERTISING</span>
                <p className="text-slate-700">Third-party advertising funds are subject to the respective platform's policies and actual account status.</p>
              </div>
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                <span className="font-bold text-[#305EFF] block mb-1">THIRD-PARTY REFUND</span>
                <p className="text-slate-700">Settlement is based on the actual amount refunded/received after reconciliation.</p>
              </div>
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl">
                <span className="font-bold text-[#305EFF] block mb-1">FINAL SETTLEMENT</span>
                <p className="text-slate-700">The client will receive a formal settlement communication by email where applicable.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "company-commitment",
        sectionNum: 30,
        title: "30. COMPANY COMMITMENT",
        icon: Award,
        summary:
          "Modern Technology & Modern Ventures Group is committed to maintaining a transparent and professional financial process with every client.",
        contentNodes: (
          <div className="space-y-3.5">
            <p>Our objective through this policy is to ensure that:</p>
            <div className="space-y-2">
              {[
                "Service commitments are clearly understood.",
                "Milestone payments are transparent.",
                "Third-party advertising funds are properly reconciled.",
                "Exceptional refund requests are reviewed fairly.",
                "Final settlements are documented.",
                "Both parties have a clear understanding of their respective financial responsibilities."
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white border border-slate-200/80 rounded-xl p-2.5">
                  <Check className="w-4 h-4 text-[#305EFF] shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
            <p className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs sm:text-sm text-blue-900 font-semibold mt-3">
              This policy is designed to protect the interests of both the client and the company while maintaining a professional and transparent business relationship.
            </p>
          </div>
        )
      }
    ],
    []
  );

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sectionsData;
    const q = searchQuery.toLowerCase();
    return sectionsData.filter(
      (sec) =>
        sec.title.toLowerCase().includes(q) ||
        sec.summary.toLowerCase().includes(q) ||
        sec.id.toLowerCase().includes(q)
    );
  }, [searchQuery, sectionsData]);

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-[#305EFF]/10 selection:text-[#305EFF] pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#305EFF]/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Hero Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#305EFF]/10 border border-[#305EFF]/40 text-[#305EFF] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Modern Technology &amp; Modern Ventures Group
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 font-display"
          >
            Refund, Cancellation &amp; Settlement Policy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-sm font-bold text-[#305EFF] bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1 inline-flex items-center gap-1.5 mb-5 shadow-xs"
          >
            Effective Date: 1 April 2026
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed"
          >
            Applicable to all clients, projects, services, packages, and professional engagements under <strong>Modern Technology &amp; Modern Ventures Group</strong>.
          </motion.p>
        </div>

        {/* Search & Main Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Menu (Table of Contents - All 30 Sections) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 lg:sticky lg:top-28 bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hidden lg:block"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900 font-extrabold text-sm uppercase tracking-wider">
                Policy Sections ({sectionsData.length})
              </h3>
              <span className="text-[11px] font-bold text-[#305EFF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                1–30
              </span>
            </div>
            
            <div className="h-[480px] overflow-y-auto pr-2 space-y-1 custom-scrollbar">
              {sectionsData.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleScrollTo(sec.id)}
                  className="w-full text-left px-3 py-2 rounded-xl text-[12.5px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#305EFF] transition-all flex items-center gap-2.5 border border-transparent hover:border-slate-100 group"
                >
                  <sec.icon className="w-3.5 h-3.5 shrink-0 text-slate-400 group-hover:text-[#305EFF]" />
                  <span className="truncate">{sec.title}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-2">
              <div className="text-[11px] font-semibold text-slate-500">
                Effective Date: 1 April 2026
              </div>
              <div className="text-[11px] font-bold text-slate-900">
                © Modern Technology &amp; Modern Ventures Group
              </div>
            </div>
          </motion.div>

          {/* Right Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Search Input Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-xs flex items-center gap-4"
            >
              <div className="relative flex-grow">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search among all 30 policy sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#305EFF]/20 focus:border-[#305EFF] text-sm font-semibold transition-all"
                />
              </div>
            </motion.div>

            {/* Sections Content List (1 to 30) */}
            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredSections.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <motion.div
                      key={sec.id}
                      id={sec.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 relative group scroll-mt-24"
                    >
                      {/* Top Header Panel */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-2xl bg-[#305EFF]/10 text-[#305EFF] border border-[#305EFF]/20 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                              {sec.title}
                            </h2>
                            <span className="text-[11px] font-bold text-[#305EFF] uppercase tracking-wider">
                              Section {sec.sectionNum} of 30
                            </span>
                          </div>
                        </div>

                        {/* Copy Link Button */}
                        <button
                          onClick={() => handleCopyLink(sec.id)}
                          className="w-9 h-9 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center transition-all text-slate-400 hover:text-slate-700"
                          title="Copy Link to Section"
                        >
                          {copiedId === sec.id ? (
                            <FileCheck className="w-4 h-4 text-green-600 animate-in fade-in zoom-in-75 duration-200" />
                          ) : (
                            <Link2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Summary Text */}
                      <p className="text-slate-900 text-sm sm:text-[15px] font-bold leading-relaxed mb-3">
                        {sec.summary}
                      </p>

                      {/* Detailed Dynamic Content */}
                      <div className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 mt-4">
                        {sec.contentNodes}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* No Results Fallback */}
              {filteredSections.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border border-slate-200 rounded-3xl p-12 text-center"
                >
                  <p className="text-slate-500 text-sm font-semibold">
                    No matching sections found for "{searchQuery}".
                  </p>
                </motion.div>
              )}
            </div>

            {/* Acknowledgement & Acceptance Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  ✍️
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    ACKNOWLEDGEMENT &amp; ACCEPTANCE
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    To be signed by client upon formal agreement or proposal confirmation
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <span className="font-bold text-slate-500 text-[11px] block">Client Name</span>
                  <div className="h-6 border-b border-dotted border-slate-400 mt-1" />
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <span className="font-bold text-slate-500 text-[11px] block">Company Name</span>
                  <div className="h-6 border-b border-dotted border-slate-400 mt-1" />
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <span className="font-bold text-slate-500 text-[11px] block">Project / Service</span>
                  <div className="h-6 border-b border-dotted border-slate-400 mt-1" />
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <span className="font-bold text-slate-500 text-[11px] block">Quotation / Proposal No.</span>
                  <div className="h-6 border-b border-dotted border-slate-400 mt-1" />
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <span className="font-bold text-slate-500 text-[11px] block">Date</span>
                  <div className="h-6 border-b border-dotted border-slate-400 mt-1" />
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <span className="font-bold text-slate-500 text-[11px] block">Client Signature</span>
                  <div className="h-6 border-b border-dotted border-slate-400 mt-1" />
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <span className="font-bold text-slate-500 text-[11px] block">Authorized Representative</span>
                  <div className="h-6 border-b border-dotted border-slate-400 mt-1" />
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <span className="font-bold text-slate-500 text-[11px] block">Signature</span>
                  <div className="h-6 border-b border-dotted border-slate-400 mt-1" />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-center space-y-1.5">
                <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">
                  MODERN TECHNOLOGY &amp; MODERN VENTURES GROUP
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  Technology | Digital Marketing | SEO | Performance Marketing | Web &amp; Software Solutions
                </p>
                <p className="text-xs font-bold text-[#305EFF]">
                  Thank you for choosing Modern Technology &amp; Modern Ventures Group.
                </p>
              </div>
            </motion.div>

            {/* Official Contact Info Card Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3
                    className="text-xl font-extrabold text-slate-900 tracking-tight mb-2"
                    style={{ color: "#0f172a" }}
                  >
                    Have questions about your project or this policy?
                  </h3>
                  <p
                    className="text-slate-600 text-sm font-medium leading-relaxed max-w-xl"
                    style={{ color: "#475569" }}
                  >
                    Our team is here to assist you. Contact our official desk at <span className="font-bold text-slate-900">contact@mitsafe.com</span> for any policy clarifications or project assistance.
                  </p>
                </div>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#305EFF] hover:bg-[#254bdb] text-white font-bold text-sm rounded-full shadow-md hover:scale-105 transition-all shrink-0"
                >
                  <span style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}>Contact Us</span>
                  <ArrowRight className="w-4 h-4 text-white" style={{ color: "#FFFFFF", stroke: "#FFFFFF" }} />
                </Link>
              </div>
            </motion.div>

            {/* Mobile Footer Meta */}
            <div className="lg:hidden bg-white border border-slate-200/80 rounded-3xl p-6 text-center space-y-2">
              <div className="text-xs font-semibold text-slate-500">
                Effective Date: 1 April 2026
              </div>
              <div className="text-xs font-bold text-slate-900">
                © Modern Technology &amp; Modern Ventures Group
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
