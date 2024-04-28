import { GiAmericanFootballBall } from "react-icons/gi";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { FaWeightHanging } from "react-icons/fa";

const InformationBanner = () => {
  return (
    <div className="flex justify-around text-darkblue text-poppins text-md font-semibold p-8">
            <div className="flex space-x-3">
                <GiAmericanFootballBall className="w-6 h-6" />
                <label> Start Node </label>
            </div>

            <div className="flex space-x-3">
                <GiAmericanFootballHelmet className="w-6 h-6"  />
                <label> End Node </label>
            </div>

            <div className="flex space-x-3">
                <FaWeightHanging className="w-6 h-6"/>
                <label>Weight</label>
            </div>

            <div className="flex space-x-3">
                <div className="bg-white border w-6 h-6"/>
                <label> Unvisited Node </label>
            </div>

            <div className="flex space-x-3">
                <div className="border w-6 h-6" style={{backgroundColor: '#00D99FBF'}}/>
                <div className="bg-visited border w-6 h-6"/>
                <label> Visited Node </label>
            </div>

            <div className="flex space-x-3">
                <div className="bg-path border w-6 h-6"/>
                <label> Algorithm Path </label>
            </div>

            <div className="flex space-x-3">
                <div className="bg-wall border w-6 h-6"/>
                <label> Wall Node </label>
            </div>
        
    </div>
  )
}

export default InformationBanner