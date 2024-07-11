import React, { useState } from "react";

const Dummy = () => {
  const [isVisible, setisVisible] = useState(false);
  const myArr = [
    {
      title: " Kitchen Backsplash",
      Discription: 1,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 2,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 3,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 4,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 5,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 6,
    },
    {
      title: " Lorem ipsum dolor sit",
      Discription: 7,
    },
  ];
  return (
    <div className="section">
      <div className="container">
        <div className="d-flex gap-4">
          {myArr.map((obj, index) => {
            return (
              <>
                <div
                  className={`p-3 
                }`}
                >
                  <p>Tit; {obj.title}</p>
                  <p>
                    Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga.{" "}
                    {obj.number}
                  </p>
                  <p>Index {index}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dummy;
