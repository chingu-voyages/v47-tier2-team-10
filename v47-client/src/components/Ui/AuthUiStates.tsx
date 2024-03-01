interface UiStatesProps {
  message: string;
}

export default function AuthUiStates(props: UiStatesProps) {
  const { message } = props;
  return (
    <>
      {message && (
        <p
          className={`${
            message === "Signup failed. Please try again." ? "text-red-500" : "text-green-500"
          } mb-4`}
        >
          {message}
        </p>
      )}
    </>
  );
}
