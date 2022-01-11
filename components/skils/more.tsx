import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

const MoreSkills = () => {
  library.add(fab, fas);
  return (
    <div className="mt-3">
      <h3 className="text-2xl border-b-2 pb-2 border-purple-500 w-14 whitespace-nowrap">
      Programming Languages
      </h3>
      <div className="flex mt-3 text-center flex-wrap space-x-5">
        <span className="hover:text-orange-300 text-gray-300">
          <FontAwesomeIcon size="3x" icon={["fab", "js-square"]} />
          <p className="mt-2 text-smm">JAVASCRIPT</p>
        </span>
        <span className="hover:text-orange-300 text-gray-300 fill-gray-300 hover:fill-orange-300 text-center">
          <svg
          className="rounded-md ml-1 mt-1 text-center"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>TypeScript icon</title>
            <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
          </svg>
          <p className="mt-2 text-smm">TYPESCRIPT</p>
        </span>
      </div>
    </div>
  );
};

export default MoreSkills;
