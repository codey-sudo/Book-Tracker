function Typography({ children, fontSize, bold, marginTop }) {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: bold ? "700" : "400",
        marginTop: marginTop,
      }}
    >
      {children}
    </div>
  );
}

export default Typography;
