import { gameData } from "../gameData";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

export default function Buttons({}) {
  const [selectedBtn, setSelectedBtn] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [initialData, setInitialData] = useState(gameData);
  const [showDialog, setShowDialog] = useState(false);

  const shuffleArray = (data) => {
    const shuffledArray = [...data];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    // console.log(shuffleArray(initialData));

    setInitialData((prevData) => shuffleArray(prevData));
  }, []);
  const btnClickHandler = (id) => {
    setInitialData((prevData) => {
      return prevData.map((_Obj, i) => {
        if (_Obj.id === id) {
          // console.log(id,"idddddddddddd",_Obj.id,prevData[id],_Obj);
          return {
            ..._Obj,
            shown: true,
          };
        }
        return _Obj;
      });
    });

    setSelectedBtn((prevSelected) => {
      // console.log(prevSelected, "prevselectedddddddd", initialData[id], id);
      const flippedObj = initialData.find((obj, i) => obj.id === id);
      if (flippedObj && !prevSelected.includes(flippedObj.name)) {
        return [...prevSelected, flippedObj.name];
      }
      return [];
    });
  };

  useEffect(() => {
    if (selectedBtn.length === 2) {
      setIsDisable(true);
      // if (selectedBtn[0].name !== selectedBtn[1].name) {
      setTimeout(() => {
        setInitialData((prevInitialData) => {
          return prevInitialData.map((_currObj, i) => {
            if (selectedBtn.includes(_currObj.name)) {
              //['cat','cat']
              return {
                ..._currObj,
                shown: false,
              };
            }
            return _currObj;
          });
        });

        setSelectedBtn([]);
        setTimeout(() => {
          setIsDisable(false);
        }, 500);
      }, 2000);
      // }
    }
  }, [selectedBtn]);

  useEffect(() => {
    const allCompleted = initialData.every((_currObj, i) => {
      return _currObj.shown;
    });

    if(allCompleted){
      setIsDisable(true);
    }
    setTimeout(() => {
      setShowDialog(allCompleted);
    }, 2300);
  }, [initialData]);

  const closeResultModal = () => {
    setShowDialog(false);
    resetHandler();
  };

  const resetHandler = () => {
    setInitialData((prevData) =>
      prevData.map((_Obj) => ({
        ..._Obj,
        shown: false,
      }))
    );

    // Add a delay before hiding all cards
    setTimeout(() => {
      setInitialData((prevData) => {
        const updatedData = shuffleArray(prevData).map((_Obj) => ({
          ..._Obj,
          shown: false,
        }));

        return updatedData;
      });
    }, 500);

    setSelectedBtn([]);
    setIsDisable(false);
  };

  // console.log(initialData, "initial data");

  return (
    <>
      {showDialog && <ResultModal showDialog onClose={closeResultModal} />}
      <main className="container">
        <div>
          {initialData.map((_data, i) => (
            <button
              key={_data.id}
              className={`btnWrapper ${isDisable ? "disabled" : " "}`}
              onClick={() => btnClickHandler(_data.id)}
              disabled={isDisable}
            >
              <div className={`btnParent ${_data.shown ? "flip" : ""}`}>
                <div className="front">
                  <img src="./egg.png"></img>
                </div>
                <div className={`back`}>
                  <img src={_data.src}></img>
                </div>
              </div>
            </button>
          ))}
        </div>
        <button className="resetButton" onClick={resetHandler}>
          Reset
        </button>
      </main>
    </>
  );
}
