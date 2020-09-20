import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ language, text }) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (text) {
        (async () => {
          const { data } = await axios.post(
            "https://translation.googleapis.com/language/translate/v2",
            {},
            {
              params: {
                key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
                target: language.value,
                q: text,
              },
            }
          );
          setResult(data.data.translations[0].translatedText);
        })();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [language, text]);

  return (
    <textarea
      style={{ width: "100%", height: "100%" }}
      value={result}
    ></textarea>
  );
};
