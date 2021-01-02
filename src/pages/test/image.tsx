import Image from "next/image";

function ImageTest() {
  return (
    <div>
      {/* this will render a 0x0 px image */}
      <div
        style={{
          position: "relative",
          maxHeight: "200px",
          maxWidth: "200px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1609050470947-f35aa6071497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
          layout="fill"
        />
      </div>

      {/* this works like it should -> image is portrait so it will fill the full 500px width and fill the height automatically */}
      <div
        style={{
          position: "relative",
          marginTop: "50px",
          maxHeight: "600px",
          maxWidth: "200px",
        }}
      >
        <img src="https://images.unsplash.com/photo-1609050470947-f35aa6071497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" />
      </div>

      <div
        style={{
          position: "relative",
          height: "500px",
          width: "500px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1609520505555-8bb8d82184bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1258&q=80"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <Image
        src="https://images.unsplash.com/photo-1609050470947-f35aa6071497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
        width={200}
        height={600}
        objectFit="contain"
      />
    </div>
  );
}

export default ImageTest;
