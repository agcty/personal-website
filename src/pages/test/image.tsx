import Image from "next/image";

function ImageTest() {
  return (
    <div className="grid-cols-4 gap-6 ">
      {/* this will render a 0x0 px image */}
      {/* <div
        style={{
          position: "relative",
          maxHeight: "200px",
          maxWidth: "600px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1609050470947-f35aa6071497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
          layout="fill"
        />
      </div>


      <div
        style={{
          position: "relative",
          marginTop: "50px",
          maxHeight: "600px",
          maxWidth: "200px",
        }}
      >
        <img src="https://images.unsplash.com/photo-1609050470947-f35aa6071497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80" />
      </div> */}

      {/* <div
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
      </div> */}

      {/* <Image
        src="https://images.unsplash.com/photo-1609050470947-f35aa6071497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"
        width={200}
        height={600}
        objectFit="contain"
      /> */}

      <div
        style={{
          position: "relative",
          maxHeight: "200px",
          maxWidth: "600px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1609589636609-6003886b08d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80"
          layout="fill"
          className="object-contain"
        />
      </div>

      <Image
        src="https://images.unsplash.com/photo-1609589636609-6003886b08d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80"
        width={600}
        height={600}
        objectFit="contain"
      />

      <div
        style={{
          position: "relative",
          marginTop: "50px",
          maxHeight: "600px",
          maxWidth: "200px",
        }}
      >
        <img src="https://images.unsplash.com/photo-1609589636609-6003886b08d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" />
      </div>

      <div className="flex flex-col justify-center max-w-6xl mx-auto bg-red-400">
        <Image
          src="https://images.unsplash.com/photo-1602526429747-ac387a91d43b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          width={1000}
          height={600}
          objectFit="contain"
        />

        <img
          src="https://images.unsplash.com/photo-1602526429747-ac387a91d43b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          style={{ maxHeight: "600px", maxWidth: "100%" }}
          className="object-contain"
        />

        <Image
          src="https://images.unsplash.com/photo-1602526429747-ac387a91d43b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          width={1500}
          height={1500}
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default ImageTest;
