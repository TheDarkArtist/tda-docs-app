export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <p><strong>Client Name:</strong> [Insert Name]</p>
      <p><strong>Date:</strong> [Insert Date]</p>
      <h2>Project Overview</h2>
      <p>[Provide a summary of the project scope, objectives, and expected outcomes.]</p>
      <h2>Deliverables</h2>
      <ul>
        <li>[Deliverable 1]</li>
        <li>[Deliverable 2]</li>
      </ul>
      <h2>Timeline</h2>
      <table>
        <tr>
          <th>Phase</th>
          <th>Timeline</th>
        </tr>
        <tr>
          <td>Phase 1: [Details]</td>
          <td>[Duration]</td>
        </tr>
        <tr>
          <td>Phase 2: [Details]</td>
          <td>[Duration]</td>
        </tr>
      </table>
      <h2>Budget</h2>
      <p>Estimated Budget: [Insert Amount]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Development Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Development Proposal</h1>
      <p><strong>Project Name:</strong> [Insert Project Name]</p>
      <p><strong>Prepared By:</strong> [Your Name/Organization]</p>
      <p><strong>Date:</strong> [Insert Date]</p>
      <h2>Goals and Objectives</h2>
      <p>[Detail the goals and objectives of the project.]</p>
      <h2>Resources and Requirements</h2>
      <ul>
        <li>[Resource 1]</li>
        <li>[Resource 2]</li>
      </ul>
      <h2>Timeline</h2>
      <p>[Include milestones with specific deadlines.]</p>
      <h2>Budget</h2>
      <p>[Provide a cost breakdown for the project.]</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <p>Dear [Recipient Name],</p>
      <p>I hope this letter finds you well. [Opening remarks/purpose of the letter.]</p>
      <p>[Details of the topic being discussed.]</p>
      <p>Thank you for your time and consideration. Please feel free to reach out to me at [your contact information] for further discussions.</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
      <p>[Your Job Title/Organization Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p><strong>Contact Information:</strong></p>
      <p>[Your Email] | [Your Phone] | [Your Address]</p>
      <h2>Summary</h2>
      <p>[Write a brief professional summary.]</p>
      <h2>Work Experience</h2>
      <ul>
        <li><strong>[Job Title]</strong> at <strong>[Company Name]</strong> ([Start Date] - [End Date])</li>
        <ul>
          <li>[Achievement/Responsibility 1]</li>
          <li>[Achievement/Responsibility 2]</li>
        </ul>
      </ul>
      <h2>Education</h2>
      <p><strong>[Degree Title]</strong>, [University Name] ([Year])</p>
      <h2>Skills</h2>
      <ul>
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
      </ul>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p>Dear [Hiring Manager's Name],</p>
      <p>I am excited to apply for the [Job Title] position at [Company Name]. [Introduce yourself and express your enthusiasm.]</p>
      <p>[Discuss your relevant experience, skills, and achievements.]</p>
      <p>Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute to [Company Name].</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p>Dear [Recipient Name],</p>
      <p>[Write the content of your letter here.]</p>
      <p>Thank you for your attention to this matter.</p>
      <p>Best regards,</p>
      <p>[Your Name]</p>
    `,
  },
];
