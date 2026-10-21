import fs from 'fs';
import path from 'path';

function buildResumePdf() {
  const lines = [
    "%PDF-1.4",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "endobj",
    "4 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj",
  ];

  const streamOps = [
    // Header
    "BT",
    "/F1 22 Tf",
    "50 790 Td",
    "(RIZKY NUGRAHA PUTRA) Tj",
    "ET",
    "BT",
    "/F2 11 Tf",
    "50 772 Td",
    "(Full-Stack Software Engineer & UI/UX Designer) Tj",
    "ET",
    "BT",
    "/F2 9 Tf",
    "50 756 Td",
    "(Email: rizkynugr.contact@gmail.com   |   GitHub: github.com/tutupolpenn   |   LinkedIn: linkedin.com/in/rizkynugr) Tj",
    "ET",

    // Horizontal rule
    "0.7 0.7 0.7 RG 1 w 50 744 m 545 744 l S",

    // SUMMARY
    "BT",
    "/F1 12 Tf",
    "50 724 Td",
    "(SUMMARY) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 708 Td",
    "(Passionate Full-Stack Developer and UI/UX Designer with a strong track record building scalable web) Tj",
    "0 -14 Td",
    "(applications, microservices, and interactive 3D/VR systems. Experienced with React, Node.js, Express,) Tj",
    "0 -14 Td",
    "(MySQL, TypeScript, Tailwind CSS, and digital heritage preservation.) Tj",
    "ET",

    // EDUCATION
    "BT",
    "/F1 12 Tf",
    "50 655 Td",
    "(EDUCATION) Tj",
    "ET",
    "BT",
    "/F1 10 Tf",
    "50 639 Td",
    "(Universitas Sebelas Maret) Tj",
    "350 0 Td",
    "(2023 - 2026) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 625 Td",
    "(Diploma 3 Teknik Informatika \\(Informatics Engineering\\) - GPA: 3.61 / 4.00) Tj",
    "0 -13 Td",
    "(\\225 Final Project: Virtual Reality reconstruction of 160 hidden Karmavibhanga relief panels of Borobudur.) Tj",
    "0 -13 Td",
    "(\\225 Awarded 3rd Place nationally at the 9th Indonesian Vocational Olympiad \\(OLIVIA IX 2024\\).) Tj",
    "ET",

    // WORK EXPERIENCE
    "BT",
    "/F1 12 Tf",
    "50 565 Td",
    "(EXPERIENCE) Tj",
    "ET",

    // PLN
    "BT",
    "/F1 10 Tf",
    "50 549 Td",
    "(PLN UP3 Ponorogo - Full-Stack Developer Intern) Tj",
    "330 0 Td",
    "(Sep 2024 - Dec 2024) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 535 Td",
    "(\\225 Built end-to-end digital Transformer Defect Reporting System replacing legacy manual spreadsheets.) Tj",
    "0 -13 Td",
    "(\\225 Engineered REST API with Node.js, Express, Sequelize, and MySQL for thousands of defect records.) Tj",
    "0 -13 Td",
    "(\\225 Automated monthly PDF report generation, reducing evaluation routine time by over 70%.) Tj",
    "ET",

    // Glace
    "BT",
    "/F1 10 Tf",
    "50 480 Td",
    "(PT. Glace Digital Kreasi - Application Developer Intern) Tj",
    "330 0 Td",
    "(Jan 2024 - Feb 2024) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 466 Td",
    "(\\225 Served as lead developer for Aquafarm Kit V2, an IoT smart aquaculture monitoring platform.) Tj",
    "0 -13 Td",
    "(\\225 Implemented real-time dashboard monitoring water quality metrics with React and PostgreSQL.) Tj",
    "0 -13 Td",
    "(\\225 Conducted end-to-end UAT and functional test scenarios ensuring high reliability before release.) Tj",
    "ET",

    // FEATURED PROJECTS
    "BT",
    "/F1 12 Tf",
    "50 410 Td",
    "(FEATURED PROJECTS) Tj",
    "ET",
    "BT",
    "/F1 10 Tf",
    "50 394 Td",
    "(Monetra - Personal Finance Tracker) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 380 Td",
    "(\\225 React, Tailwind CSS, Chart.js, Zustand state management with granular selectors and CSV export.) Tj",
    "ET",
    "BT",
    "/F1 10 Tf",
    "50 355 Td",
    "(Borobudur VR Reconstruction) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 341 Td",
    "(\\225 Interactive VR preservation of historical Karmavibhanga relief panels built using Blender and Unity.) Tj",
    "ET",

    // SKILLS & CERTIFICATIONS
    "BT",
    "/F1 12 Tf",
    "50 300 Td",
    "(SKILLS & CERTIFICATIONS) Tj",
    "ET",
    "BT",
    "/F2 9.5 Tf",
    "50 284 Td",
    "(Technical Skills: JavaScript, TypeScript, React.js, Node.js, Express, MySQL, PostgreSQL, Tailwind CSS, Vite) Tj",
    "0 -13 Td",
    "(Design & Tools: UI/UX, Figma, Blender \\(3D\\), Git, GitHub, Playwright, Postman, Linux) Tj",
    "0 -13 Td",
    "(Certifications: Meta Front-End Developer Specialization, Meta Full Stack Specialization \\(Coursera\\)) Tj",
    "ET"
  ];

  const streamContent = streamOps.join("\n");
  const streamLength = Buffer.byteLength(streamContent);

  const streamObj = [
    "6 0 obj",
    `<< /Length ${streamLength} >>`,
    "stream",
    streamContent,
    "endstream",
    "endobj"
  ];

  const allLines = [...lines, ...streamObj];
  
  let offset = 0;
  const xref = ["xref", "0 7", "0000000000 65535 f "];
  const objOffsets = [];

  const bodyParts = [];
  for (const line of allLines) {
    if (line.match(/^\d+ 0 obj/)) {
      objOffsets.push(offset);
    }
    const buf = Buffer.from(line + "\n");
    bodyParts.push(buf);
    offset += buf.length;
  }

  for (const off of objOffsets) {
    xref.push(String(off).padStart(10, '0') + " 00000 n ");
  }

  const xrefOffset = offset;
  const trailer = [
    xref.join("\n"),
    "trailer",
    "<< /Size 7 /Root 1 0 R >>",
    "startxref",
    String(xrefOffset),
    "%%EOF"
  ].join("\n");

  bodyParts.push(Buffer.from(trailer));
  const finalPdf = Buffer.concat(bodyParts);

  const outPath = path.resolve('public/cv-rizky-nugraha.pdf');
  fs.writeFileSync(outPath, finalPdf);
  console.log(`Generated resume PDF at ${outPath} (${finalPdf.length} bytes)`);
}

buildResumePdf();
