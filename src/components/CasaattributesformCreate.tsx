import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ErrorMessage, Formik } from "formik";
import { fetch } from "../../utils/dataAccess";
import { Casaattributes } from "../../types/Casaattributes";

interface Props {
  casaattributes?: Casaattributes;
}

export const Casaattributesform: FunctionComponent<Props> = ({
  casaattributes,
}) => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await fetch(casaattributes["@id"], { method: "DELETE" });
      router.push("/casaattributes");
    } catch (error) {
      setError(`Error when deleting the resource: ${error}`);
      console.error(error);
    }
  };

  return (
    <div>
      <h1>
        {casaattributes
          ? `Edit Casaattributes ${casaattributes["@id"]}`
          : `Create Casaattributes`}
      </h1>
      <Formik
        initialValues={
          casaattributes ? { ...casaattributes } : new Casaattributes()
        }
        validate={(values) => {
          const errors = {};
          // add your validation logic here
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setStatus, setErrors }) => {
          const isCreation = !values["@id"];
          try {
            await fetch(isCreation ? "/casaattributes" : values["@id"], {
              method: isCreation ? "POST" : "PUT",
              body: JSON.stringify(values),
            });
            setStatus({
              isValid: true,
              msg: `Element ${isCreation ? "created" : "updated"}.`,
            });
            router.push("/casaattributes");
          } catch (error) {
            setStatus({
              isValid: false,
              msg: `${error.defaultErrorMsg}`,
            });
            setErrors(error.fields);
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          status,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-control-label" htmlFor="_piscina">
                piscina
              </label>
              <input
                name="piscina"
                id="_piscina"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.piscina && touched.piscina ? " is-invalid" : ""
                }`}
                aria-invalid={errors.piscina && touched.piscina}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="piscina"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_televisao">
                televisao
              </label>
              <input
                name="televisao"
                id="_televisao"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.televisao && touched.televisao ? " is-invalid" : ""
                }`}
                aria-invalid={errors.televisao && touched.televisao}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="televisao"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_arCondicionado">
                arCondicionado
              </label>
              <input
                name="arCondicionado"
                id="_arCondicionado"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.arCondicionado && touched.arCondicionado
                    ? " is-invalid"
                    : ""
                }`}
                aria-invalid={errors.arCondicionado && touched.arCondicionado}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="arCondicionado"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_roupascama">
                roupascama
              </label>
              <input
                name="roupascama"
                id="_roupascama"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.roupascama && touched.roupascama ? " is-invalid" : ""
                }`}
                aria-invalid={errors.roupascama && touched.roupascama}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="roupascama"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_roupasbanho">
                roupasbanho
              </label>
              <input
                name="roupasbanho"
                id="_roupasbanho"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.roupasbanho && touched.roupasbanho ? " is-invalid" : ""
                }`}
                aria-invalid={errors.roupasbanho && touched.roupasbanho}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="roupasbanho"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_limpeza">
                limpeza
              </label>
              <input
                name="limpeza"
                id="_limpeza"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.limpeza && touched.limpeza ? " is-invalid" : ""
                }`}
                aria-invalid={errors.limpeza && touched.limpeza}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="limpeza"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_utilcozinha">
                utilcozinha
              </label>
              <input
                name="utilcozinha"
                id="_utilcozinha"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.utilcozinha && touched.utilcozinha ? " is-invalid" : ""
                }`}
                aria-invalid={errors.utilcozinha && touched.utilcozinha}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="utilcozinha"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_fogao">
                fogao
              </label>
              <input
                name="fogao"
                id="_fogao"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.fogao && touched.fogao ? " is-invalid" : ""
                }`}
                aria-invalid={errors.fogao && touched.fogao}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="fogao"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_frigorif">
                frigorif
              </label>
              <input
                name="frigorif"
                id="_frigorif"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.frigorif && touched.frigorif ? " is-invalid" : ""
                }`}
                aria-invalid={errors.frigorif && touched.frigorif}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="frigorif"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_congel">
                congel
              </label>
              <input
                name="congel"
                id="_congel"
                type="text"
                placeholder=""
                className={`form-control${
                  errors.congel && touched.congel ? " is-invalid" : ""
                }`}
                aria-invalid={errors.congel && touched.congel}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="congel"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_forno">
                forno
              </label>
              <input
                name="forno"
                id="_forno"
                value={values.forno ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.forno && touched.forno ? " is-invalid" : ""
                }`}
                aria-invalid={errors.forno && touched.forno}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="forno"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_barbecue">
                barbecue
              </label>
              <input
                name="barbecue"
                id="_barbecue"
                value={values.barbecue ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.barbecue && touched.barbecue ? " is-invalid" : ""
                }`}
                aria-invalid={errors.barbecue && touched.barbecue}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="barbecue"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_microndas">
                microndas
              </label>
              <input
                name="microndas"
                id="_microndas"
                value={values.microndas ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.microndas && touched.microndas ? " is-invalid" : ""
                }`}
                aria-invalid={errors.microndas && touched.microndas}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="microndas"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_mlavaloica">
                mlavaloica
              </label>
              <input
                name="mlavaloica"
                id="_mlavaloica"
                value={values.mlavaloica ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.mlavaloica && touched.mlavaloica ? " is-invalid" : ""
                }`}
                aria-invalid={errors.mlavaloica && touched.mlavaloica}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="mlavaloica"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_mlavaroupa">
                mlavaroupa
              </label>
              <input
                name="mlavaroupa"
                id="_mlavaroupa"
                value={values.mlavaroupa ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.mlavaroupa && touched.mlavaroupa ? " is-invalid" : ""
                }`}
                aria-invalid={errors.mlavaroupa && touched.mlavaroupa}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="mlavaroupa"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_aqcentral">
                aqcentral
              </label>
              <input
                name="aqcentral"
                id="_aqcentral"
                value={values.aqcentral ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.aqcentral && touched.aqcentral ? " is-invalid" : ""
                }`}
                aria-invalid={errors.aqcentral && touched.aqcentral}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="aqcentral"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_satcabo">
                satcabo
              </label>
              <input
                name="satcabo"
                id="_satcabo"
                value={values.satcabo ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.satcabo && touched.satcabo ? " is-invalid" : ""
                }`}
                aria-invalid={errors.satcabo && touched.satcabo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="satcabo"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_internet">
                internet
              </label>
              <input
                name="internet"
                id="_internet"
                value={values.internet ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.internet && touched.internet ? " is-invalid" : ""
                }`}
                aria-invalid={errors.internet && touched.internet}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="internet"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_fengomar">
                fengomar
              </label>
              <input
                name="fengomar"
                id="_fengomar"
                value={values.fengomar ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.fengomar && touched.fengomar ? " is-invalid" : ""
                }`}
                aria-invalid={errors.fengomar && touched.fengomar}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="fengomar"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_estacionamento">
                estacionamento
              </label>
              <input
                name="estacionamento"
                id="_estacionamento"
                value={values.estacionamento ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.estacionamento && touched.estacionamento
                    ? " is-invalid"
                    : ""
                }`}
                aria-invalid={errors.estacionamento && touched.estacionamento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="estacionamento"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_telefone">
                telefone
              </label>
              <input
                name="telefone"
                id="_telefone"
                value={values.telefone ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.telefone && touched.telefone ? " is-invalid" : ""
                }`}
                aria-invalid={errors.telefone && touched.telefone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="telefone"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_despertador">
                despertador
              </label>
              <input
                name="despertador"
                id="_despertador"
                value={values.despertador ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.despertador && touched.despertador ? " is-invalid" : ""
                }`}
                aria-invalid={errors.despertador && touched.despertador}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="despertador"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_dvd">
                dvd
              </label>
              <input
                name="dvd"
                id="_dvd"
                value={values.dvd ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.dvd && touched.dvd ? " is-invalid" : ""
                }`}
                aria-invalid={errors.dvd && touched.dvd}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage className="text-danger" component="div" name="dvd" />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_torradeira">
                torradeira
              </label>
              <input
                name="torradeira"
                id="_torradeira"
                value={values.torradeira ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.torradeira && touched.torradeira ? " is-invalid" : ""
                }`}
                aria-invalid={errors.torradeira && touched.torradeira}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="torradeira"
            />

            {status && status.msg && (
              <div
                className={`alert ${
                  status.isValid ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {status.msg}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Link href="/casaattributes">
        <a className="btn btn-primary">Back to list</a>
      </Link>
      {casaattributes && (
        <button className="btn btn-danger" onClick={handleDelete}>
          <a>Delete</a>
        </button>
      )}
    </div>
  );
};
