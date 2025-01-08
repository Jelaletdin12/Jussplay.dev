/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import { useState } from "react";
// Assets
import formImg from "../../assets/form-bg.png";
import styleBtnForm from "../../pages/ContactUs/contactus.module.scss";
// Tools
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
// Utils
import { schemaBlockchain } from "../Util/validation/blockchain-form";
// Styles
import styles from "../../pages/Blockchain/blockchain.module.scss";

export const Form = () => {
  const [focusStates, setFocusStates] = useState({});
  const [inputValues, setInputValues] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaBlockchain) });

  const handleFocusChange = (field, isFocused) => {
    setFocusStates((prev) => ({ ...prev, [field]: isFocused }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (data) => {
    // try {
    // 	const emailSubmit = await emailjs.send(
    // 		'service_98xj0q7',
    // 		'template_p4ocvai',
    // 		data,
    // 		'hYHKOzXlqLTNIQct5'
    // 	)
    // 	const result = console.log(
    // 		'Email successfully sent:',
    // 		emailSubmit.text,
    // 		emailSubmit.status
    // 	)
    // 	reset()
    // 	return result
    // } catch (error) {
    // 	console.error('Error sending email:', error.text)
    // }
    reset();
    console.log("Send data to form:", data);
  };

  const getPlaceholderClass = (field) => {
    return focusStates[field] || inputValues[field]
      ? styles.placeholderActive
      : "";
  };

  const getErrorClass = (field) => {
    return errors[field] ? styles.placeholderError : "";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 300, ease: "easeOut" }}
      className={styles.blockchain_form}
      style={{ margin: "0" }}
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        className={styles.blockchain_img}
      >
        <img src={formImg} alt="" />
      </motion.div>
      <motion.form
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <div>x</div>
        <h1 className={styles.formTitle}>BOOK A CONSULTATION</h1>
        {["firstName", "email", "phone", "message"].map((field) => (
          <div key={field} className={styles.inputCol}>
            <label>
              <span className={styles.inputWrapper}>
                {field === "message" ? (
                  <textarea
                    name={field}
                    onBlur={() => handleFocusChange(field, false)}
                    onFocus={() => handleFocusChange(field, true)}
                    onChange={handleInputChange}
                    {...register(field)}
                  ></textarea>
                ) : (
                  <input
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    onBlur={() => handleFocusChange(field, false)}
                    onFocus={() => handleFocusChange(field, true)}
                    onChange={handleInputChange}
                    {...register(field)}
                  />
                )}
              </span>
              <span
                className={`${styles.placeholder} ${getPlaceholderClass(
                  field
                )} ${getErrorClass(field)}`}
              >
                {errors[field]?.message ||
                  field.charAt(0).toUpperCase() + field.slice(1)}
              </span>
            </label>
          </div>
        ))}
        <div className={styles.btnForm}>
          <button
            type="submit"
            style={{
              backgroundColor: "#000",
              color: "#fff",
            }}
            data-back={"Send Message ?"}
            data-front={"Send Message"}
            className={styleBtnForm.form__btn}
          ></button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Form;
