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
                <div>
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
                </div>

                <div className="checkboxes">
                  <div className="">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onChange={handleChangeHero}
                    />
                    <span className="">Hero</span>
                  </div>

                  <div className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onChange={handleChangeDecoy}
                    />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Decoy
                    </span>
                  </div>
                </div>
                {/* radio buttons */}
                <div className="radio-buttons">
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
