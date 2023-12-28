import person from "../assets/person.svg";
import key from "../assets/key.svg";
import { ActionButton } from "../components/ActionButton";
import { Texfiled } from "../components/Textfield";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/store";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register } = userActions;

  const handleRegister = () => {
    if (password === passwordAgain) {
      dispatch(register({ email, firstName, lastName, password }));
    } else toast.error("Parolele nu coincid");
  };

  const goToSignin = () => {
    navigate("/signin");
  };

  return (
    <div>
      <div className="relative flex flex-col gap-y-4 pt-16 items-center justify-start w-full">
        <div className="flex flex-col gap-3 w-96 bg-[#1f1b24] p-8 rounded-2xl">
          <h1 className="text-slate-50 text-2xl font-bold">Înregistrare</h1>

          <Texfiled
            placeholder={"Introdu adresa e-mail"}
            icon={person}
            type={"email"}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Texfiled
            placeholder={"Introdu prenume"}
            icon={person}
            type={"text"}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <Texfiled
            placeholder={"Introdu nume"}
            icon={person}
            type={"text"}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <Texfiled
            placeholder={"Introdu parola"}
            icon={key}
            type={"password"}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Texfiled
            placeholder={"Introdu parola din nou"}
            icon={key}
            type={"password"}
            onChange={(event) => {
              setPasswordAgain(event.target.value);
            }}
          />
          <div className="my-1"></div>
          <ActionButton text="Înregistrare" onAction={handleRegister} />
          <ActionButton
            text="Înapoi la Autentificare"
            onAction={goToSignin}
            isTransparent={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
