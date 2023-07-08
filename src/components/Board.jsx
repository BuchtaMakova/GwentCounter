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
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);

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

  /*function tightBond(cardData, setCardData, formData, setSum) {
    const newVar = [...cardData, formData];
    const numberInput = formData.numberInput;
    const tightBondCount = newVar.filter(
      (i) => i.selectedOption == "tightbond" && i.numberInputHard == numberInput
    ).length;
    const tightBondResult = tightBondCount * numberInput;
    const newData = newVar.map((card, index) => {
      if (
        card.selectedOption === "tightbond" &&
        card.numberInputHard == numberInput
      ) {
        return {
          ...card,
          numberInput: tightBondResult,
          numberInputHard: numberInput,
        };
      }
      return card;
    });
    const sumTightBond = newData.reduce((acc, i) => acc + i.numberInput, 0);
    setSum(sumTightBond);
    setCardData(newData);
  }*/

  /*function moraleBoost(cardData, setCardData, formData, setSum) {
    const newVarMoraleBoost = [...cardData, formData];
    const numberInput = formData.numberInput;
    const moraleBoostCount = newVarMoraleBoost.filter(
      (i) => i.selectedOption == "moraleboost"
    ).length;
    const newData = newVarMoraleBoost.map((card, index) => {
      const moraleBoostResult = card.numberInputHard + moraleBoostCount;
      const moraleBoostSelf = moraleBoostResult - 1;
      if (card.selectedOption !== "moraleboost" && moraleBoostCount > 0) {
        return {
          ...card,
          numberInput: moraleBoostResult,
        };
      } else if (
        card.selectedOption === "moraleboost" &&
        moraleBoostCount > 1
      ) {
        return {
          ...card,
          numberInput: moraleBoostSelf,
        };
      }
      return card;
    });
    const sumMoraleBoost = newData.reduce((acc, i) => acc + i.numberInput, 0);
    setSum(sumMoraleBoost);
    setCardData(newData);
  }*/

  function Cards(cardData, setCardData, formData, setSum) {
    const newVar = [...cardData, formData];
    const numberInput = formData.numberInput;
    const tightBondCount = newVarMoraleBoost.filter(
      (i) => i.selectedOption == "tightbond" && i.numberInputHard == numberInput
    ).length;
    const tightBondResult = tightBondCount * numberInput;
    const moraleBoostCount = newVar.filter(
      (i) => i.selectedOption == "moraleboost"
    ).length;
    const newData = newVar.map((card, index) => {
      const moraleBoostResult = card.numberInputHard + moraleBoostCount;
      const moraleBoostSelf = moraleBoostResult - 1;

      if (card.selectedOption !== "moraleboost" && moraleBoostCount > 0) {
        if (card.selectedOption === "tightbond") {
          const moraleBoostResult = tightBondResult + moraleBoostCount;
          return {
            ...card,
            numberInput: moraleBoostResult,
          };
        }
        return {
          ...card,
          numberInput: moraleBoostResult,
        };
      } else if (
        card.selectedOption === "moraleboost" &&
        moraleBoostCount > 1
      ) {
        return {
          ...card,
          numberInput: moraleBoostSelf,
        };
      } else if (
        card.selectedOption === "tightbond" &&
        card.numberInputHard == numberInput
      ) {
        return {
          ...card,
          numberInput: tightBondResult,
          //numberInputHard: numberInput,
        };
      }

      return card;
    });
    const sumMoraleBoost = newData.reduce((acc, i) => acc + i.numberInput, 0);
    setSum(sumMoraleBoost);
    setCardData(newData);
  }

  function setData(formData) {
    if (open) {
      //tightBond(cardData, setCardData, formData, setSum);
      Cards(cardData, setCardData, formData, setSum);
    } else if (open1) {
      //tightBond(cardData1, setCardData1, formData, setSum1);
      Cards(cardData, setCardData, formData, setSum);
    } else if (open2) {
      //tightBond(cardData2, setCardData2, formData, setSum2);
      Cards(cardData, setCardData, formData, setSum);
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
        <div>{sum + sum1 + sum2}</div>
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
