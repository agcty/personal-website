function BorderSlice() {
  return (
    <h1 className="text-3xl font-bold leading-tight tracking-tight text-dark-900 sm:text-4xl sm:leading-none md:text-4xl">
      <span
        className="p-1 border-4"
        style={{
          borderImageSlice: 1,
          borderImageSource:
            "linear-gradient(90deg, rgba(248,113,113,1) 0%, rgba(217,216,34,1) 34%, rgba(52,211,153,1) 63%, rgba(99,179,237,1) 100%)",
        }}
      >
        This is my text
      </span>
    </h1>
  );
}

export default BorderSlice;
