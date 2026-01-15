import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { GiHamburgerMenu } from "react-icons/gi";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Sir.</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              {[
                "Suggest beautiful places to see on an upcoming road trip",
                "Briefly summarize this concept: urban planning",
                "Brainstorm team bonding activities for our work retreat",
                "Improve the readability of the following code",
              ].map((text, i) => (
                <div
                  key={i}
                  className="card"
                  onClick={() => onSent(text)}
                >
                  <p>{text}</p>
                  <img src={assets.message_icon} alt="icon" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <h3>{recentPrompt}</h3>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="gemini" />
              {loading ? (
                <div className="loader">
                  <hr /><hr /><hr />
                </div>
              ) : (
                <p>{resultData}</p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a prompt here"
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim()) {
                  onSent(input.trim());
                }
              }}
            />
            {input.trim() && (
              <img
                onClick={() => onSent(input.trim())}
                src={assets.send_icon}
                alt="send"
              />
            )}
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate information. Please verify responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
