import "./board.css";
import { useState } from "react";
import Modal from "./Modal.jsx";
import Cards from "./Cards.jsx";
function Board() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [cardData1, setCardData1] = useState([]);
  const [cardData2, setCardData2] = useState([]);
  const [sum, setSum] = useState(0);

  function openModal() {
    setOpen(true);
  }

  function openModal1() {
    setOpen1(true);
  }

  function openModal2() {
    setOpen2(true);
  }

  function closeModal() {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
  }

  function setData(formData) {
    if (open) {
      setSum((currentSum) => currentSum + formData.numberInput);

      // console.log(cardData[0]);
      //console.log(formData);
      const newVar = [...cardData, formData];
      const tightBondCount = newVar.filter(
        (i) => i.selectedOption == "tightbond"
      ).length;
      //console.log(tightBondCount);
      const firstTightBond = newVar.find(
        (i) => i.selectedOption == "tightbond"
      );
      console.log(firstTightBond);

      const tightBondResult = tightBondCount * firstTightBond.numberInputHard;
      const newData = newVar.map((card, index) => {
        if (card.selectedOption === "tightbond") {
          return {
            ...card,
            numberInput: tightBondResult,
          };
        }
        return card;
      });

      const sumTightBond = newData.reduce((acc, i) => acc + i.numberInput, 0);
      //console.log(sumTightBond);

      setCardData(newData);
    } else if (open1) {
      setCardData1((current) => [...current, formData]);
      setSum((currentSum) => currentSum + formData.numberInput);
      console.log(formData);
    } else if (open2) {
      setCardData2((current) => [...current, formData]);
      setSum((currentSum) => currentSum + formData.numberInput);
      console.log(formData);
    }
  }

  return (
    <>
      <Modal
        open={open}
        open1={open1}
        open2={open2}
        closeModal={closeModal}
        setData={setData}
      />
      <div className="board">
        <div>{sum}</div>
        <div className="row">
          {cardData.map((card, index) => {
            return (
              <div key={index}>
                <Cards card={card} />
              </div>
            );
          })}
          <div className="row-button">
            <button className="button_plus" onClick={openModal}></button>
          </div>
        </div>
        <div className="row">
          {cardData1.map((card, index) => {
            return (
              <div key={index}>
                <Cards card={card} />
              </div>
            );
          })}
          <div className="row-button">
            <button className="button_plus" onClick={openModal1}></button>
          </div>
        </div>
        <div className="row">
          {cardData2.map((card, index) => {
            return (
              <div key={index}>
                <Cards card={card} />
              </div>
            );
          })}
          <div className="row-button">
            <button className="button_plus" onClick={openModal2}></button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Board;
