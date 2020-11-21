had the exact same issue some weeks ago but luckily there's a pretty easy workaround:

const credential = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64").toString()
);

const visionClient = new vision.v1.ImageAnnotatorClient({
  projectId: "my-project-id",
  // important
  credentials: {
    client_email: credential.client_email,
    private_key: credential.private_key,
  },
});
The important part is that you need to base64 encode your google service account key. Take this as a reference: https://cloud.google.com/iam/docs/creating-managing-service-account-keys

Then you need to add this key to your .env.local file in the form of GOOGLE_SERVICE_KEY=base64_encoded_key
and also do the same in the vercel dashboard.

Instead of a keyfile you basically save the file's content as an env var, then inside your code you decode the base64 string and parse it to an actual json object which you can then use to authenticate. The google API documentation is not that good when it comes to examples like this.