import React from "react";
import style from "./Privacypolicy.module.css";

const sections = [
  {
    title: "Definitions",
    content: [
      "Software – SaaS product provided by Revora Digital Design",
      "Subscription Term – Period of authorized use",
      "Authorized Users – Users permitted by Client",
      "Confidential Information – Non-public business/technical information",
    ],
  },
  {
    title: "Grant of License / Right to Use",
    content: [
      "Limited, non-exclusive, non-transferable right to use",
      "For Client’s internal business purposes only",
    ],
  },
  {
    title: "Access & Availability",
    content: [
      "99.9% uptime commitment",
      "Support via email/portal/phone",
      "Scheduled maintenance excluded",
    ],
  },
  {
    title: "Subscription Fees & Payment",
    content: [
      "As per quotation/order form",
      "Payment due within 7 working days of invoice",
      "Taxes additional",
    ],
  },
  {
    title: "Client Responsibilities",
    content: [
      "Use software only as authorized",
      "Maintain confidentiality of login credentials",
      "Comply with laws and regulations",
    ],
  },
  {
    title: "Device Restriction",
    content: [
      "Each user account may access the SaaS mobile application on a maximum of 2 devices at any given time.",
      "Unauthorized sharing of credentials or bypassing restrictions is a material breach.",
      "Additional device activation requires prior written approval from Revora Digital Design.",
    ],
  },
  {
    title: "Data Ownership & Privacy",
    content: [
      "Client retains ownership of all uploaded data",
      "Provider processes data only for service delivery",
      "GDPR / DPDP compliance ensured",
    ],
  },
  {
    title: "Confidentiality",
    content: [
      "Mutual non-disclosure of confidential information",
      "Exceptions: legal or regulatory requirements",
    ],
  },
  {
    title: "Service Levels (SLA)",
    content: [
      "99.9% uptime commitment",
      "Support response: Critical issues – 4 hrs, Non-critical – 24 hrs",
    ],
  },
  {
    title: "Warranties & Disclaimers",
    content: ["Software performs as documented (UAT)"],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Liability capped at fees paid in preceding 12 months",
    ],
  },
  {
    title: "Indemnification",
    content: [
      "Client indemnifies Revora Digital Design if misuse of the software causes an IP rights issue",
    ],
  },
  {
    title: "Governing Law & Jurisdiction",
    content: ["Governed by Indian law"],
  },
  {
    title: "Term & Termination",
    content: [
      "Valid for subscription term",
      "Either party may terminate with 30 days’ notice for breach",
      "Client data available for 30 days post-termination before deletion",
    ],
  },
  {
    title: "Intellectual Property Rights",
    content: [
      "Revora Digital Design retains ownership of software, code, and documentation",
      "Client shall not copy, modify, reverse engineer, or build competing products",
    ],
  },
  {
    title: "Data Security & Commitment",
    content: [
      "Encryption, backups, monitoring, and access controls applied",
      "Breach notification within 72 hours",
    ],
  },
  {
    title: "Data Retention & Deletion",
    content: [
      "Client may request soft copy of data within 30 days of termination",
      "After 30 days, data permanently deleted",
    ],
  },
  {
    title: "Legal & Regulatory Compliance",
    content: [
      "Client is solely responsible for data accuracy, legality, and compliance",
      "Data may be used to meet regulatory, audit, or statutory reporting obligations",
      "Revora Digital Design will not be liable for client data non-compliance",
    ],
  },
  {
    title: "Change Requests & Additional Costs",
    content: [
      "Additional charges may apply for changes to Web or Mobile Applications",
      "All change requests must be documented and approved in writing",
    ],
  },
  {
    title: "Disclaimer",
    content: [
      "Revora Digital Design will not be liable for data crashes caused by misuse, third-party integrations, unsupported devices, or external attacks beyond reasonable security measures",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className={style.container}>
      <h1>Terms & Conditions / Privacy Policy</h1>

      {sections.map((section, index) => (
        <section className={style.section} key={index}>
          <h2>{section.title}</h2>

          <ul>
            {section.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default PrivacyPolicy;