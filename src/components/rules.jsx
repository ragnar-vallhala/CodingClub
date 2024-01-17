import styles, { layout } from "../style";
import { download, arrow } from '../assets'; // Replace with your actual icon library
import React from 'react';

const DownloadButton = ({ fileName }) => {

  const handleDownload = () => {
    const filePath = `../../public/${fileName}`;
    const a = document.createElement('a');
    a.href = filePath;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button onClick={handleDownload}>
       <p className="font-poppins text-blue-500 text-[16px] leading-[23.4px] text-right">
          Download the Full Rule-Book Here
        </p>
    </button>
  );
};

const Rules = () => {
  const pdfFileName = 'RuleBook.pdf';
  const rules = [
    "Every team should register through the website of 'Fill the Void()'.",
    "Team size should be less than or equal to 5. Individual participation is allowed.",
    "Treat all participants, organizers, and sponsors with respect.",
    "All work must be original, and participants should avoid plagiarism.",
    "Every team should submit their codes through only the team leader’s ID.",
    "Submissions must be completed and submitted by the specified deadline.",
    "Important announcements and updates will be communicated through the official channels.",
    "Teams are responsible for their technical setups, and organizers will not be held responsible for technical issues on the participant’s end.",
    "Violation of rules or any form of misconduct, including plagiarism, may result in disqualification.",
    "Each submitted code will be checked for AI generation."
  ];


  return (
    <div id="rules" className='text-white'>
      <h2 className={styles.heading2}>Rules and Guidelines</h2>
      <ol className={`${styles.paragraph} mt-5`}>
        {rules.map((rule, index) => (
         
          <li key={index}>
           <div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
              <div className={`w-[32px] h-[32px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={arrow} alt="star" className="object-contain" />
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="font-poppins text-white text-[16px] leading-[23.4px]">
                  {rule}
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ol>
    
      <DownloadButton fileName={pdfFileName} />
    </div>
  );
};

export default Rules;
