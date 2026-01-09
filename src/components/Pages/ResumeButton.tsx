


const FILE_PATH = "https://my-portfolio-lbdj.vercel.app/public/saneeth_cv.pdf"
export default function ResumeButton() {

    const downloadResume = (url:any) => {
        const filename = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href= url;
        aTag.setAttribute("download",filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
  return (
    <button
     onClick={()=>downloadResume(FILE_PATH)}
      className="px-4 border-t-8 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Download Resume
    </button>
  );
}
