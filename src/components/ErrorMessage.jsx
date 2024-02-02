export function ErrorMessage({ condition, message }) {
    return condition ? <div style={{ color: "red" }}>{message}</div> : null;
  }
