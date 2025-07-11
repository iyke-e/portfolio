import pdf from "./Egwim_Ikechukwu_Resume.pdf"
import "./resume.css"
const resume = () => {
    return (
        <div>
            <iframe className="pdf" src={pdf} >

            </iframe>
        </div>
    )
}

export default resume