import "./modal.css";
import { useState } from "react";

function Modal(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const [numberInput, setNumberInput] = useState(0);
  const [numberInputHard, setNumberInputHard] = useState(0);
  const [hero, setHero] = useState(false);
  const [decoy, setDecoy] = useState(false);

  const handleChangeHero = () => {
    setHero(!hero);
  };

  const handleChangeDecoy = () => {
    setDecoy(!decoy);
  };

  function bruh() {
    const formData = {
      numberInput,
      numberInputHard,
      selectedOption,
      hero,
      decoy,
    };
    props.setData(formData);
  }

  function showModal() {
    if (props.open || props.open1 || props.open2) {
      return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <button className="cross" onClick={props.closeModal}></button>
            </div>
            <div className="modal-body">
              <form>
                {/* number input */}
                <input
                  min="0"
                  className="numero"
                  type="number"
                  value={numberInput}
                  onChange={(e) => {
                    setNumberInputHard(parseInt(e.target.value));
                    setNumberInput(parseInt(e.target.value));
                  }}
                />

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={handleChangeHero}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Hero
                  </span>
                </label>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={handleChangeDecoy}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Decoy
                  </span>
                </label>

                {/* radio buttons */}
                <div>
                  <input
                    type="radio"
                    value="none"
                    checked={selectedOption === "none"}
                    onChange={(e) => setSelectedOption("none")}
                  />
                  None
                </div>

                <div>
                  <input
                    type="radio"
                    value="horn"
                    checked={selectedOption === "horn"}
                    onChange={() => setSelectedOption("horn")}
                  />
                  Horn
                </div>

                <div>
                  <input
                    type="radio"
                    value="tightbond"
                    checked={selectedOption === "tightbond"}
                    onChange={() => setSelectedOption("tightbond")}
                  />
                  Tight bond
                </div>

                <div>
                  <input
                    type="radio"
                    value="moraleboost"
                    checked={selectedOption === "moraleboost"}
                    onChange={() => setSelectedOption("moraleboost")}
                  />
                  Morale boost
                </div>
              </form>
              <button onClick={bruh}>bruh</button>
            </div>
          </div>
        </div>
      );
    }
  }

  return <>{showModal()}</>;
}
export default Modal;
