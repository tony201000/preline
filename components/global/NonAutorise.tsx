// app/components/header.tsx
"use client";

import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const HandleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(""); // Réinitialiser le message d'erreur

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Rediriger vers la page dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      // Gérer les erreurs d'authentification
      const typedError = error as { code?: string };
      switch (typedError.code) {
        case "auth/invalid-email":
          setErrorMessage("Adresse e-mail invalide.");
          break;
        case "auth/user-not-found":
          setErrorMessage(
            "Aucun utilisateur trouvé avec cette adresse e-mail."
          );
          break;
        case "auth/wrong-password":
          setErrorMessage("Mot de passe incorrect.");
          break;
        default:
          setErrorMessage("Erreur de connexion, veuillez réessayer.");
      }
    }
  };

  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main
        id="content"
        className="relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"
      >
        <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
          <svg
            className="w-20 sm:w-28 h-auto mx-auto mb-4 sm:mb-8"
            width={500}
            height={500}
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m245 501h-244c-1.5e-5 -166.67-1.5e-5 -333.33-2.9e-5 -500 166.67-4.4e-5 333.33-4.4e-5 500-8.9e-5 9.1e-5 166.67 9.1e-5 333.33 1.83e-4 500-85.167 2.14e-4 -170.33 2.14e-4 -256 2.14e-4m-51.063-287.19c0.65337 6.9299 1.3067 13.86 2.053 21.775 1.2914-1.46 1.6843-1.7921 1.939-2.2086 5.9838-9.7865 19.78-14.158 27.866-1.7694 3.7321 5.7172 7.4913 8.3537 14.327 7.6247 2.2923-0.24443 4.8685 2.1748 7.315 3.3765-0.16754 0.38148-0.33508 0.76299-0.50264 1.1445h58.074c2.7883-24.368 5.5521-48.523 8.3101-72.626 8.9645-0.35425 12.697-4.1102 12.68-12.45-0.012085-5.9893-1.8557-8.6394-7.8374-11.006-4.5481-1.7993-8.8462-0.74963-12.382 2.2045-3.8488 3.2153-5.5088 10.01-2.6809 13.807 4.1483 5.5699 1.1956 9.3467-1.8027 13.504-0.75891 1.0523-1.5956 2.0496-2.335 3.1149-7.7658 11.189-15.519 22.386-23.89 34.467-6.6646-18.811-13.048-36.827-19.39-54.73 8.028-5.3634 8.9331-10.083 6.2378-16.894-1.9272-4.8695-6.2245-7.383-11.602-7.1017-5.3774 0.28133-8.9407 3.5236-10.978 8.219-1.8743 4.3192-0.29176 10.204 3.899 13.281 2.6492 1.9453 2.8785 3.5371 1.7964 6.3357-2.2119 5.7208-4.0383 11.589-6.1026 17.369-3.8972 10.911-7.8502 21.803-12.014 33.35-2.635-3.6958-4.8123-6.6938-6.9317-9.7322-7.2463-10.389-14.379-20.858-21.763-31.148-2.2196-3.0934-2.0741-5.4944 0.032639-8.5409 4.3522-6.2936 0.64754-13.891-3.3237-16.639-5.0114-3.467-14.128-1.4302-17.596 3.6289-3.1295 4.5653-1.6464 13.313 3.3508 16.792 2.2378 1.5582 5.2922 1.9435 8.0806 2.8969 1.5574 13.539 3.1449 27.34 5.1693 41.953m96.063 53.955v8.9114h7.2018v-19.838h7.4952v-7.8404h-30.202c-6.4973 0-13.01 0.27853-19.487-0.082077-5.9116-0.32912-12.336 2.2911-17.588-3.1636v15.113c0.4017 0.13294 0.80342 0.26584 1.2051 0.39877 0.77029-1.415 1.5406-2.83 2.1193-3.893h31.395v19.328h7.2522v-12.531c0.48282-0.001801 0.96561-0.003632 1.4484-0.005463v12.51h7.613v-13.325c0.97763 1.0802 1.3027 1.276 1.353 1.5269 0.129 0.64389 0.13592 1.3122 0.19357 2.8907m-85.971-34.298c-7.6661 10.117-8.6108 21.084-4.043 32.695 2.2232 5.6513 6.007 10.186 12.243 10.659 5.9931 0.45535 9.7637-3.8693 12.2-8.8732 1.3229-2.717 1.6193-5.9172 2.6594-8.7981 0.31763-0.87973 1.5241-1.4917 2.4231-2.072 0.23251-0.15009 0.84145 0.28293 1.2127 0.42358 0.24919 1.5467 0.47562 2.9521 0.68868 4.2745h4.3305v-17.754c-1.6789 0.087662-3.0849 0.16107-3.0734 0.16048-1.8549 2.3807-2.9832 3.8289-4.9127 6.3054-2.7787-18.407-13.549-25.127-23.728-17.021m6.3268 85.793c1.308-0.71567 3.2277-1.1075 3.8101-2.2074 1.7885-3.3779 3.0646-7.027 4.5399-10.571-2.6223-0.49484-5.2328-1.0718-7.8718-1.4496-1.3009-0.18622-2.7455-0.28986-3.9565 0.097016-1.0471 0.33447-2.5554 1.3739-2.6028 2.176-0.068084 1.1523 0.87998 2.4615 1.6429 3.5255 0.38803 0.54114 1.3195 0.6926 2.0052 1.0202-0.25778 0.51285-0.51558 1.0257-0.77338 1.5385-1.9291-1.0569-4.7369-1.6749-5.5448-3.292-0.83907-1.6794-0.48628-4.9882 0.72878-6.35 1.0728-1.2023 4.0636-0.98541 6.1848-0.88986 3.0116 0.13565 6.0024 0.73447 9.8763 1.2522-3.923-8.135-8.9478-10.545-16.197-8.9425-5.2195 1.1535-8.8737 5.5325-9.1832 11.004-0.55544 9.8195 5.5971 14.795 17.341 13.088m-31.352-19.921c-0.10437 1.5442-0.20876 3.0884-0.40427 5.9807-2.6818-3.5541-4.21-6.398-6.505-8.3318-1.5178-1.2789-4.1539-1.6624-6.2516-1.5719-0.67534 0.029114-1.681 2.8255-1.7565 4.3934-0.23109 4.8014-0.02626 9.622-0.1059 14.433-0.04602 2.7803 0.24699 4.8117 3.9064 4.8191 3.4411 0.006867 4.3293-1.5645 4.1385-4.5807-0.086746-1.3712 0.13849-2.7621 0.27719-5.0516 2.5538 3.1776 4.2508 5.8873 6.551 7.9117 1.2437 1.0946 3.5875 1.5034 5.295 1.2559 0.78809-0.11429 1.705-2.5238 1.7622-3.9254 0.20956-5.1359 0.29088-10.299-0.050171-15.421-0.096878-1.455-1.5188-3.5694-2.8155-4.0335-2.3358-0.83612-4.2238 0.30435-4.0414 4.1221m96.516 16.608c0.60526-2.0698 1.2105-4.1396 1.8158-6.2094-2.5787 0.31235-5.158 0.62024-7.7345 0.95001-0.13034 0.016693-0.22729 0.23334-0.35538 0.33783-2.1196 1.7295-4.7291 2.9987-6.3324 0.085236-1.0609-1.9278-1.2875-5.0587-0.42197-6.9964 0.44916-1.0055 4.1212-0.95563 6.2664-0.72452 2.8499 0.30707 5.6305 1.2566 9.1131 2.0911-0.65799-6.6542-4.3996-8.9076-8.5747-10.064-4.8537-1.3444-9.8108-0.65787-13.319 3.3486-3.4186 3.9042-3.6768 8.6364-2.2678 13.612 2.2525 7.954 15.329 10.361 21.81 3.5697m14.528-19.796c-7.0597 3.7487-7.1051 10.495-5.2935 16.939 1.3966 4.9681 8.3183 7.8637 14.154 6.7203 6.3628-1.2466 9.1328-4.2307 9.4626-11.53-3.0233 1.031-5.7873 1.564-8.1083 2.879-2.3715 1.3435-4.916 2.7722-6.5356 0.17239-1.1793-1.893-1.3691-5.1003-0.58948-7.1972 0.34702-0.93347 4.2042-0.94199 6.4-0.71378 2.8779 0.29907 5.6883 1.2473 9.1271 2.0576-2.4536-9.418-8.399-12.2-18.617-9.3276m-152.2 13.459c1.0853-4.6561 2.1705-9.3121 3.2915-14.121-4.5419-1.1592-8.3797-1.235-9.5554 4.8671-0.25476 1.3223-2.1191 2.3345-4.1315 4.4043-0.23192-2.9389-0.47993-4.3822-0.42981-5.8152 0.092484-2.6444-0.90411-4.5465-3.6656-3.7592-1.3521 0.38556-3.1063 2.3264-3.1942 3.6609-0.35979 5.4648-0.3615 10.982 0.010643 16.445 0.088097 1.2932 2.1386 2.4527 3.2863 3.6738 1.1769-1.1871 2.6314-2.2133 3.4423-3.6125 0.64307-1.1096 0.49754-2.6762 0.93591-5.5976 4.1092 5.1812 5.8839 12.537 13.93 8.0758-1.2133-2.5207-2.4195-5.0263-3.9206-8.2216m218.39-5.751c0.47067-0.41 1.3152-0.78809 1.3533-1.235 0.324-3.7967-2.3957-6.9045-6.4489-7.5445-6.7894-1.0721-10.938 0.70074-11.965 5.1132-1.1206 4.8148 0.72333 7.8727 5.5987 9.5843 1.7828 0.62586 3.455 1.567 5.1776 2.3643-0.18854 0.38922-0.37711 0.77844-0.56564 1.1677-3.4719-0.88568-6.9438-1.7714-11.107-2.8333 0.84003 6.3477 3.5987 8.9564 8.316 9.4679 4.3573 0.47247 8.8106 0.012847 10.805-4.3825 2.2845-5.0349-0.49652-8.6914-5.9026-11.434 2.065-0.090424 3.0532-0.1337 4.7378-0.26773m25.721-0.26086c0.21518-0.24463 0.59726-0.47436 0.6206-0.73611 0.36432-4.0835-2.2383-7.1639-6.5406-7.7983-5.8293-0.85962-10.789 1.223-11.829 4.9672-1.203 4.3286 0.96521 8.1077 5.5269 9.7114 1.9528 0.68652 3.8767 1.4555 5.8137 2.1871-0.28378 0.60953-0.5676 1.2191-0.85138 1.8286-1.4054-0.72195-2.7447-1.7974-4.2331-2.0759-1.8381-0.34402-3.8536-0.24518-5.6627 0.19531-0.35327 0.086029-0.57767 2.8177-0.05951 3.9678 1.5252 3.3855 8.4347 5.1614 12.999 3.7179 4.4733-1.4148 6.2026-4.748 5.0601-8.8688-0.68973-2.4879-3.0699-4.5072-4.5681-6.5688 0.48349-0.045136 1.7628-0.16461 3.7249-0.5274m-151.73-3.86c-2.3252 6.14-4.6503 12.28-6.9755 18.42 0.28543 0.44772 0.57086 0.89542 0.85629 1.3431 2.645-0.78284 5.2503-1.7766 7.9472-2.2834 2.263-0.42535 4.7033-0.68469 6.9377-0.29236 2.9313 0.51459 5.7376 1.7412 8.5976 2.6616 0.25217-0.48544 0.50433-0.97089 0.7565-1.4563-2.4202-6.3146-4.6547-12.711-7.3798-18.891-0.76585-1.7368-2.757-3.4729-4.5674-4.0888-3.0593-1.0407-4.9077 1.0432-6.1727 4.5872m102.22 18.334c1.4231-3.8109-0.11145-5.2097-3.9344-5.1256-1.7194 0.037872-3.4514-0.4967-5.4639-0.81711 1.9672-3.9595 8.3782 0.24127 7.5657-5.182-0.26056-1.7393-4.2167-2.9249-7.0098-4.6991 2.0949-0.11182 3.9886 0.18155 5.53-0.42322 1.1762-0.46149 2.746-2.1628 2.6289-3.1293-0.1589-1.3118-1.5346-2.9622-2.8052-3.5229-1.3986-0.61716-3.2699-0.1872-4.9349-0.17267-10.122 0.088349-8.9748-1.0842-9.0053 9.1512-0.049316 16.506-0.013947 16.506 17.429 13.921m-183.44-10.585c6.56e-4 2.1602 0.076614 4.3235-0.016327 6.4796-0.12791 2.9671 0.18248 5.1576 4.1385 5.0991 3.67-0.054291 3.9407-2.0699 3.8965-4.8421-0.07692-4.8176-0.076996-9.6381 0-14.456 0.044296-2.7726-0.22697-4.7876-3.8968-4.8418-3.9563-0.058441-4.2659 2.1327-4.1382 5.0994 0.09285 2.1561 0.016968 4.3195 0.016327 7.4615m186.26 35.219c1.2352-1.678 2.9355-3.2138 3.5106-5.0938 0.28995-0.94794-1.2036-3.2051-2.3525-3.6344-1.408-0.52622-3.68-0.30338-4.9079 0.55487-3.221 2.2515-1.6176 6.439 3.7498 8.1734m-198.88-5.0772c0.76241 1.3789 1.2215 3.4832 2.3612 3.9597 1.5533 0.64944 4.0159 0.66559 5.3533-0.19263 1.0917-0.70059 1.7936-3.2753 1.4031-4.6632-0.39233-1.3945-2.6049-3.4771-3.5657-3.2589-1.937 0.43991-3.5659 2.2364-5.5519 4.155m111.74 0.75388c1.6839 1.4445 3.3678 2.8889 5.0517 4.3334 1.2636-1.4921 3.4507-2.9367 3.5304-4.4895 0.079315-1.5443-1.6332-4.0525-3.1362-4.6249-3.1426-1.1968-4.7718 1.0896-5.4459 4.781m-58.203 4.0686c0.81122-0.7821 2.2979-1.5621 2.3004-2.3467 0.006073-1.9467-0.090821-4.443-1.2537-5.6637-0.87221-0.91556-4.2153-0.92718-5.1088-0.016785-1.1991 1.2216-1.8592 3.98-1.3115 5.5886 0.43617 1.281 3.0287 1.8278 5.3737 2.4387m108.54-2.584c1.9781 0.77167 3.9563 1.5433 5.9345 2.3149 0.40961-2.1034 1.3754-4.3093 1.0137-6.2704-0.20657-1.1199-2.5762-1.8408-3.9719-2.7413-0.75522 1.7454-1.5071 3.4923-2.269 5.2348-0.1308 0.29926-0.30414 0.57996-0.70737 1.462m76.646-3.5834c0.044525 1.1359-0.16849 2.3662 0.20401 3.3818 0.39337 1.0725 1.1747 2.4539 2.0982 2.76 1.0197 0.33795 3.3716-0.22656 3.449-0.68442 0.40735-2.4099 1.22-5.5231 0.10806-7.2303-1.5239-2.3396-4.2952-1.8648-5.8593 1.7729m-145.62 3.3709c-0.80772-1.9136-1.6154-3.8271-2.4232-5.7407-0.4325 0.080749-0.86499 0.16147-1.2975 0.24219 0.59035 2.5779 0.85829 5.3114 1.9793 7.633 0.31207 0.64636 4.3057 0.62122 4.6177-0.03836 1.0948-2.3147 1.3209-5.0402 1.8768-7.6097-0.41132-0.074249-0.82263-0.1485-1.2339-0.22275-0.92421 1.89-1.8484 3.7799-3.5191 5.7363m-58.816-4.1975c-0.59631-0.51395-1.1926-1.0279-1.789-1.5418-0.84296 1.1055-1.6859 2.2109-2.5983 3.4074-1.1634-1.5567-2.084-2.7884-3.0045-4.0201-0.2223 0.17081-0.4446 0.34161-0.6669 0.51245 1.1862 2.6265 2.3725 5.253 3.5587 7.8795 1.41-1.8659 2.82-3.7318 4.4999-6.2375m37.346 4.7327c-0.20357-2.0308-0.40714-4.0616-0.6107-6.0924-1.0307-1.9636-3.7263-3.583-4.6334 0.48172-0.43732 1.9596 1.3923 4.5063 2.4918 6.6339 0.15253 0.2951 2.0136-0.29272 2.7522-1.0232m-84.289-3.7117c4.4676-3.4242-1.1959-3.1784-1.3163-5.0284-5.8077 2.4201-0.81172 5.6329-1.0357 8.3181-0.056328 0.67526 2.1258 1.5372 3.9686 2.7773-1.002-2.7529-1.5034-4.1303-1.6166-6.067m230.95-4.8796c-4.978 2.7289 0.35715 5.9493-0.26871 8.9313-0.046936 0.22369 2.2798 0.9455 2.7013 1.1144 0-2.3015 0.22998-4.0721-0.068817-5.7485-0.26486-1.4862-1.1174-2.8677-2.3638-4.2973m-113.84 9.8607c1.0835 0.1095 2.167 0.21899 2.8809 0.29114-0.39522-1.9597-0.81546-3.634-1.0519-5.3338-0.22549-1.6214-0.25943-3.2694-0.37756-4.9057-0.90431 0.034027-1.8086 0.068024-2.7129 0.10202-0.047226 1.6388-0.23218 3.2887-0.10088 4.913 0.1185 1.466 0.58299 2.9041 1.3624 4.9333m-62.652-5.2641c0.5688-0.49262 1.1376-0.98523 2.4533-2.1247h-6.6496c0.20319 2.6964 0.38585 5.1205 0.56851 7.5446 0.54688-0.00473 1.0938-0.00943 1.6406-0.01413 0.47525-1.661 0.95048-3.3221 1.9872-5.4058m168.7-2.6481h-3.3683v7.6446c1.8306-2.2081 3.4573-4.0779 4.9226-6.0666 0.16461-0.22339-0.58462-1.1201-1.5543-1.578z" />
            <path
              d="m193.72 213.41c-1.806-14.207-3.3935-28.008-4.9509-41.547-2.7884-0.95334-5.8428-1.3387-8.0806-2.8969-4.9971-3.4794-6.4802-12.227-3.3508-16.792 3.468-5.0592 12.584-7.0959 17.596-3.6289 3.9712 2.7474 7.6759 10.345 3.3237 16.639-2.1068 3.0465-2.2523 5.4474-0.032639 8.5409 7.3835 10.29 14.516 20.76 21.763 31.148 2.1194 3.0384 4.2967 6.0365 6.9317 9.7322 4.1634-11.548 8.1164-22.439 12.014-33.35 2.0643-5.7795 3.8906-11.648 6.1026-17.369 1.0821-2.7986 0.85281-4.3904-1.7964-6.3357-4.1908-3.0771-5.7733-8.9615-3.899-13.281 2.0375-4.6954 5.6008-7.9377 10.978-8.219 5.3777-0.28137 9.675 2.2321 11.602 7.1017 2.6953 6.8103 1.7902 11.53-6.2378 16.894 6.3429 17.903 12.726 35.919 19.39 54.73 8.3709-12.081 16.124-23.279 23.89-34.467 0.73938-1.0653 1.5761-2.0625 2.335-3.1149 2.9983-4.1577 5.951-7.9346 1.8027-13.504-2.8279-3.7971-1.168-10.591 2.6809-13.807 3.5361-2.9541 7.8342-4.0038 12.382-2.2045 5.9817 2.3665 7.8253 5.0166 7.8374 11.006 0.016816 8.3394-3.7157 12.095-12.68 12.45-2.758 24.103-5.5218 48.257-8.3101 72.626h-58.074c0.16756-0.38148 0.3351-0.76299 0.50264-1.1445-2.4465-1.2017-5.0228-3.6209-7.315-3.3765-6.8361 0.72893-10.595-1.9075-14.327-7.6247-8.087-12.388-21.883-8.0171-27.866 1.7694-0.25468 0.41654-0.64758 0.74858-1.939 2.2086-0.74628-7.9153-1.3996-14.845-2.2714-22.181z"
              fill="#FBC612"
            />
            <path
              d="m290 267.31c-0.056702-1.1186-0.063629-1.7869-0.19263-2.4308-0.050263-0.25088-0.37537-0.44668-1.353-1.5269v13.325h-7.613v-12.51c-0.48282 0.001831-0.96561 0.003662-1.4484 0.005463v12.531h-7.2522v-19.328h-31.395c-0.57868 1.063-1.349 2.478-2.1193 3.893-0.4017-0.13293-0.80342-0.26584-1.2051-0.39877v-15.113c5.2513 5.4546 11.676 2.8344 17.588 3.1636 6.4772 0.36061 12.99 0.082077 19.487 0.082077h30.202v7.8404h-7.4952v19.838h-7.2018c0-3.0049 0-5.9582-9.46e-4 -9.3714z"
              fill="#F0513E"
            />
            <path
              d="m204.3 233.21c9.9029-7.845 20.673-1.125 23.452 17.282 1.9295-2.4765 3.0578-3.9247 4.9127-6.3054-0.011505 5.96e-4 1.3945-0.072814 3.0734-0.16048v17.754h-4.3305c-0.21306-1.3224-0.43948-2.7278-0.68868-4.2745-0.37126-0.14066-0.98019-0.57367-1.2127-0.42358-0.89899 0.58032-2.1055 1.1923-2.4231 2.072-1.0401 2.8809-1.3366 6.0811-2.6594 8.7981-2.4364 5.0039-6.207 9.3285-12.2 8.8732-6.2355-0.47379-10.019-5.0081-12.243-10.659-4.5678-11.611-3.6231-22.578 4.3191-32.956m10.49 34.464c4.2725-3.2224 5.5693-6.8892 2.7334-11.975-0.81822-1.4673-0.12884-4.2049 0.63791-6.0388 1.7105-4.0912 1.1243-7.7124-2.3761-10.035-1.5662-1.0391-4.9272-1.0638-6.5073-0.047043-3.5384 2.2768-3.9949 5.8314-2.5406 10.014 0.82118 2.3615 0.78946 5.4689-0.008194 7.856-2.0362 6.0935 0.65915 10.299 8.0609 10.225z"
              fill="#F0513E"
            />
            <path
              d="m209.99 319.43c-11.377 1.5359-17.53-3.4398-16.974-13.259 0.30952-5.472 3.9637-9.851 9.1832-11.004 7.249-1.6021 12.274 0.80756 16.197 8.9425-3.8739-0.51776-6.8646-1.1166-9.8763-1.2522-2.1212-0.09555-5.112-0.31244-6.1848 0.88986-1.2151 1.3618-1.5678 4.6706-0.72878 6.35 0.80795 1.6171 3.6157 2.2351 5.5448 3.292 0.2578-0.51282 0.51559-1.0257 0.77338-1.5385-0.68579-0.32761-1.6172-0.47906-2.0052-1.0202-0.76295-1.064-1.711-2.3732-1.6429-3.5255 0.047409-0.80212 1.5558-1.8416 2.6028-2.176 1.211-0.38687 2.6556-0.28323 3.9565-0.097016 2.639 0.37781 5.2495 0.95477 7.8718 1.4496-1.4753 3.5437-2.7514 7.1928-4.5399 10.571-0.58237 1.0999-2.5021 1.4917-4.1772 2.3785z"
              fill="#292929"
            />
            <path
              d="m179.01 298.93c-0.18787-3.4053 1.7001-4.5458 4.036-3.7097 1.2967 0.46414 2.7186 2.5785 2.8155 4.0335 0.34105 5.1218 0.25974 10.285 0.050171 15.421-0.057175 1.4016-0.97412 3.8111-1.7622 3.9254-1.7075 0.24753-4.0513-0.16122-5.295-1.2559-2.3001-2.0244-3.9972-4.7341-6.551-7.9117-0.1387 2.2895-0.36394 3.6804-0.27719 5.0516 0.19081 3.0162-0.6974 4.5876-4.1385 4.5807-3.6594-0.007324-3.9525-2.0387-3.9064-4.8191 0.079636-4.8112-0.1252-9.6319 0.1059-14.433 0.075485-1.5679 1.0812-4.3643 1.7565-4.3934 2.0977-0.090454 4.7338 0.29303 6.2516 1.5719 2.295 1.9338 3.8232 4.7777 6.505 8.3318 0.19551-2.8923 0.2999-4.4365 0.40973-6.3931z"
              fill="#292929"
            />
            <path
              d="m275.25 316.22c-6.2137 6.5233-19.29 4.1164-21.542-3.8376-1.409-4.9755-1.1508-9.7076 2.2678-13.612 3.5081-4.0065 8.4652-4.693 13.319-3.3486 4.1751 1.1564 7.9167 3.4098 8.5747 10.064-3.4826-0.83453-6.2632-1.784-9.1131-2.0911-2.1452-0.23111-5.8173-0.28098-6.2664 0.72452-0.86551 1.9377-0.63888 5.0686 0.42197 6.9964 1.6033 2.9135 4.2128 1.6443 6.3324-0.085236 0.12808-0.10449 0.22504-0.32114 0.35538-0.33783 2.5765-0.32977 5.1558-0.63766 7.7345-0.95001-0.60529 2.0698-1.2105 4.1396-2.0837 6.4774z"
              fill="#292929"
            />
            <path
              d="m290.43 296.04c9.834-2.7593 15.779 0.023102 18.233 9.4411-3.4388-0.81027-6.2492-1.7585-9.1271-2.0576-2.1958-0.22821-6.0529-0.2197-6.4 0.71378-0.77963 2.0969-0.58981 5.3042 0.58948 7.1972 1.6196 2.5999 4.1641 1.1711 6.5356-0.17239 2.321-1.3149 5.085-1.848 8.1083-2.879-0.3298 7.2992-3.0997 10.283-9.4626 11.53-5.836 1.1434-12.758-1.7522-14.154-6.7203-1.8116-6.4444-1.7662-13.19 5.6774-17.053z"
              fill="#292929"
            />
            <path
              d="m137.99 309.96c1.3536 2.8505 2.5597 5.3561 3.7731 7.8768-8.0465 4.4615-9.8212-2.8946-13.93-8.0758-0.43837 2.9214-0.29285 4.4881-0.93591 5.5976-0.8109 1.3992-2.2654 2.4254-3.4423 3.6125-1.1478-1.221-3.1982-2.3806-3.2863-3.6738-0.37214-5.4633-0.37043-10.98-0.010643-16.445 0.087868-1.3346 1.8421-3.2754 3.1942-3.6609 2.7615-0.78735 3.758 1.1147 3.6656 3.7592-0.050117 1.4329 0.19789 2.8763 0.42981 5.8152 2.0124-2.0698 3.8768-3.082 4.1315-4.4043 1.1757-6.1021 5.0135-6.0263 9.5554-4.8671-1.1209 4.8089-2.2062 9.4649-3.144 14.466z"
              fill="#292929"
            />
            <path
              d="m355.89 303.91c-1.3364 0.088653-2.3246 0.13193-4.3896 0.22235 5.406 2.743 8.187 6.3994 5.9026 11.434-1.9943 4.3954-6.4477 4.855-10.805 4.3825-4.7173-0.51151-7.476-3.1201-8.316-9.4679 4.1628 1.062 7.6346 1.9476 11.107 2.8333 0.18854-0.38925 0.3771-0.77847 0.56564-1.1677-1.7226-0.7973-3.3947-1.7385-5.1776-2.3643-4.8754-1.7116-6.7193-4.7695-5.5987-9.5843 1.027-4.4124 5.1753-6.1852 11.965-5.1132 4.0532 0.63995 6.7729 3.7478 6.4489 7.5445-0.038147 0.44687-0.88266 0.82495-1.7015 1.2803z"
              fill="#292929"
            />
            <path
              d="m381.61 303.72c-1.6207 0.24112-2.9001 0.3606-3.3836 0.40573 1.4983 2.0616 3.8784 4.0809 4.5681 6.5688 1.1425 4.1208-0.58682 7.454-5.0601 8.8688-4.5639 1.4435-11.473-0.3324-12.999-3.7179-0.51816-1.1501-0.29376-3.8818 0.05951-3.9678 1.8091-0.44049 3.8246-0.53934 5.6627-0.19531 1.4884 0.27856 2.8277 1.354 4.2331 2.0759 0.28378-0.60953 0.5676-1.2191 0.85138-1.8286-1.937-0.73154-3.8609-1.5005-5.8137-2.1871-4.5617-1.6037-6.7299-5.3828-5.5269-9.7114 1.0405-3.7443 6.0002-5.8268 11.829-4.9672 4.3023 0.63446 6.9049 3.7148 6.5406 7.7983-0.023346 0.26175-0.40543 0.49148-0.96198 0.85779z"
              fill="#292929"
            />
            <path
              d="m230.37 299.38c1.1119-3.1872 2.9603-5.2711 6.0196-4.2304 1.8103 0.61588 3.8015 2.352 4.5674 4.0888 2.7251 6.1801 4.9596 12.577 7.3798 18.891-0.25217 0.48544-0.50433 0.97089-0.7565 1.4563-2.8601-0.92038-5.6664-2.147-8.5976-2.6616-2.2345-0.39233-4.6747-0.133-6.9377 0.29236-2.6969 0.50684-5.3022 1.5006-7.9472 2.2834-0.28543-0.44772-0.57086-0.89542-0.85629-1.3431 2.3252-6.14 4.6503-12.28 7.1285-18.777z"
              fill="#292929"
            />
            <path
              d="m332.11 318.35c-17.11 2.3152-17.145 2.3151-17.096-14.191 0.030579-10.235-1.1167-9.0629 9.0053-9.1512 1.665-0.014526 3.5363-0.44449 4.9349 0.17267 1.2706 0.56067 2.6463 2.2111 2.8052 3.5229 0.1171 0.96658-1.4528 2.6678-2.6289 3.1293-1.5414 0.60477-3.4351 0.3114-5.53 0.42322 2.7931 1.7742 6.7492 2.9598 7.0098 4.6991 0.81244 5.4232-5.5985 1.2225-7.5657 5.182 2.0125 0.3204 3.7445 0.85498 5.4639 0.81711 3.823-0.084137 5.3575 1.3147 3.6015 5.3957z"
              fill="#292929"
            />
            <path
              d="m149 307c6.56e-4 -2.6511 0.076538-4.8145-0.016312-6.9706-0.12776-2.9667 0.18184-5.1578 4.1382-5.0994 3.6698 0.05426 3.9411 2.0692 3.8968 4.8418-0.076996 4.8176-0.07692 9.6381 0 14.456 0.044281 2.7723-0.22642 4.7878-3.8965 4.8421-3.956 0.058472-4.2664-2.132-4.1385-5.0991 0.092941-2.1561 0.016983-4.3195 0.016312-6.9706z"
              fill="#292929"
            />
            <path
              d="m334.88 342.75c-4.9881-1.7771-6.5915-5.9646-3.3705-8.2161 1.2279-0.85824 3.4999-1.0811 4.9079-0.55487 1.1489 0.42935 2.6425 2.6865 2.3525 3.6344-0.57504 1.88-2.2753 3.4158-3.89 5.1365z"
              fill="#292929"
            />
            <path
              d="m136.49 337.29c1.871-1.5777 3.4999-3.3742 5.4369-3.8141 0.96083-0.21823 3.1734 1.8644 3.5657 3.2589 0.39049 1.3878-0.31146 3.9626-1.4031 4.6632-1.3374 0.85822-3.8 0.84207-5.3533 0.19263-1.1397-0.4765-1.5988-2.5808-2.2462-4.3006z"
              fill="#292929"
            />
            <path
              d="m248.12 338c0.67421-3.3096 2.3034-5.596 5.446-4.3992 1.5031 0.57242 3.2155 3.0806 3.1362 4.6249-0.079743 1.5528-2.2668 2.9975-3.5304 4.4895-1.6839-1.4445-3.3678-2.8889-5.0518-4.7153z"
              fill="#292929"
            />
            <path
              d="m189.56 342.59c-1.9901-0.74179-4.5827-1.2886-5.0188-2.5696-0.5477-1.6086 0.11247-4.3669 1.3115-5.5886 0.89358-0.9104 4.2366-0.89877 5.1088 0.016785 1.1628 1.2207 1.2597 3.717 1.2537 5.6637-0.002472 0.78464-1.4891 1.5646-2.6552 2.4777z"
              fill="#292929"
            />
            <path
              d="m298.59 339.57c0.27847-0.58566 0.45181-0.86636 0.58261-1.1656 0.76187-1.7425 1.5137-3.4894 2.269-5.2348 1.3957 0.90057 3.7653 1.6215 3.9719 2.7413 0.36169 1.9611-0.6041 4.1671-1.0137 6.2704-1.9782-0.77164-3.9564-1.5433-5.8098-2.6113z"
              fill="#292929"
            />
            <path
              d="m375.14 335.93c1.5349-3.28 4.3062-3.7548 5.8301-1.4152 1.1119 1.7072 0.29929 4.8204-0.10806 7.2303-0.077392 0.45786-2.4294 1.0224-3.449 0.68442-0.92349-0.30609-1.7048-1.6875-2.0982-2.76-0.3725-1.0156-0.15948-2.2459-0.17477-3.7395z"
              fill="#292929"
            />
            <path
              d="m229.86 339.63c1.2975-1.9232 2.2217-3.8131 3.1459-5.7031 0.41132 0.074249 0.82263 0.1485 1.2339 0.22275-0.55588 2.5696-0.78197 5.295-1.8768 7.6097-0.31197 0.65958-4.3056 0.68472-4.6177 0.03836-1.121-2.3217-1.3889-5.0552-1.9793-7.633 0.4325-0.080719 0.86499-0.16144 1.2975-0.24219 0.80771 1.9136 1.6154 3.8271 2.7964 5.7075z"
              fill="#292929"
            />
            <path
              d="m170.54 335.78c-1.545 2.1858-2.955 4.0517-4.3649 5.9176-1.1862-2.6265-2.3725-5.253-3.5587-7.8795 0.2223-0.17084 0.4446-0.34164 0.6669-0.51245 0.92052 1.2317 1.841 2.4634 3.0045 4.0201 0.9124-1.1965 1.7553-2.302 2.5983-3.4074 0.59631 0.51395 1.1926 1.0279 1.654 1.8617z"
              fill="#292929"
            />
            <path
              d="m208.18 340.47c-0.90439 0.4548-2.7654 1.0426-2.918 0.74753-1.0995-2.1277-2.9292-4.6743-2.4918-6.6339 0.9071-4.0647 3.6027-2.4453 4.6334-0.48172 0.20357 2.0308 0.40714 4.0616 0.77643 6.3681z"
              fill="#292929"
            />
            <path
              d="m123.53 336.76c0.30728 1.6571 0.80869 3.0346 1.8107 5.7874-1.8428-1.24-4.0249-2.102-3.9686-2.7773 0.22397-2.6852-4.772-5.898 1.0357-8.3181 0.12031 1.8499 5.7839 1.6041 1.1221 5.308z"
              fill="#292929"
            />
            <path
              d="m355.01 331.6c0.91974 1.4286 1.7723 2.8101 2.0371 4.2963 0.2988 1.6764 0.068817 3.447 0.068817 5.7485-0.42157-0.16894-2.7483-0.89075-2.7013-1.1144 0.62585-2.9821-4.7093-6.2025 0.59537-8.9304z"
              fill="#292929"
            />
            <path
              d="m240.6 341.17c-0.54564-1.7398-1.0101-3.1779-1.1286-4.6439-0.1313-1.6243 0.05365-3.2742 0.10088-4.913 0.90431-0.033996 1.8086-0.067993 2.7129-0.10202 0.11813 1.6363 0.15207 3.2843 0.37756 4.9057 0.23644 1.6998 0.65668 3.3741 1.0519 5.3338-0.71391-0.072144-1.7974-0.18164-3.1146-0.5806z"
              fill="#292929"
            />
            <path
              d="m177.91 336.41c-0.756 1.8724-1.2312 3.5334-1.7065 5.1944-0.54686 0.0047-1.0937 0.0094-1.6406 0.01413-0.18266-2.4241-0.36533-4.8482-0.56851-7.5446h6.6496c-1.3157 1.1394-1.8845 1.632-2.734 2.336z"
              fill="#292929"
            />
            <path
              d="m347.21 333.49c0.64758 0.52118 1.3968 1.4178 1.2322 1.6412-1.4653 1.9887-3.092 3.8585-4.9226 6.0666v-7.6446c1.1413 0 2.2548 0 3.6904-0.063233z"
              fill="#292929"
            />
            <path d="m214.43 267.81c-7.0326-0.061889-9.7279-4.2678-7.6917-10.361 0.79765-2.3871 0.82938-5.4946 0.008194-7.856-1.4543-4.1823-0.99783-7.7368 2.5406-10.014 1.5801-1.0168 4.9411-0.99204 6.5073 0.047043 3.5004 2.3222 4.0866 5.9434 2.3761 10.035-0.76675 1.8339-1.4561 4.5716-0.63791 6.0388 2.8359 5.0853 1.5391 8.7521-3.1026 12.11z" />
          </svg>
          <h1 className="text-2xl text-white sm:text-4xl">
            Acces Non Autorise
          </h1>
          <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-black sm:text-6xl">
            <span className="bg-clip-text bg-gradient-to-tr from-red-300 to-red-800 text-transparent">
              Merci de vous authentifier
            </span>
          </h2>
          <form onSubmit={HandleLogin}>
            <div className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="hs-cover-with-gradient-form-name-1"
                  className="sr-only"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="hs-cover-with-gradient-form-name-1"
                    className="py-3 ps-11 pe-4 block w-full bg-white/20 border-black/20 text-black placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-20"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute inset-y-0 start-10 flex items-center pointer-events-none z-20 ps-4">
                    <svg
                      className="shrink-0 size-4 text-gray-800 dark:text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="hs-cover-with-gradient-form-password-1"
                  className="sr-only"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="hs-cover-with-gradient-form-password-1"
                    className="py-3 ps-11 pe-4 block w-full bg-white/20 border-white/20 text-black placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-20"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 start-10 flex items-center pointer-events-none z-20 ps-4">
                    <svg
                      className="shrink-0 size-4 text-gray-800 dark:text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                </div>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-lg font-semibold">
                  {errorMessage}
                </p>
              )}
              <div className="grid">
                <button
                  type="submit"
                  className="sm:p-6 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-300 text-white hover:bg-white/20 focus:outline-none focus:bg-white/20 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Connexion
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <footer className="absolute bottom-0 inset-x-0 text-center py-5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-white/50">
            © 2024 KingAccess. Un produit fait pour vous.
          </p>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </>
  );
};

export default Login;
