import person from "../assets/person.svg";
import key from "../assets/key.svg";
import { ActionButton } from "../components/ActionButton";
import { Texfiled } from "../components/Textfield";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/store";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    dispatch(userActions.login({ email, password }));
    navigate("/store");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="relative flex flex-col gap-y-4 pt-16 items-center justify-start w-full">
        <div className="flex flex-col gap-3 w-96 bg-[#1f1b24] p-8 rounded-2xl">
          <h1 className="text-slate-50 text-2xl font-bold">Autentificare</h1>

          <Texfiled
            placeholder={"Introdu e-mail"}
            icon={person}
            type={"email"}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Texfiled
            placeholder={"Introdu parolă"}
            icon={key}
            type={"password"}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="my-1"></div>
          <ActionButton text="Autentificare" onAction={handleLogin} />
          <ActionButton
            text="Înregistrare"
            onAction={goToSignup}
            isTransparent={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
