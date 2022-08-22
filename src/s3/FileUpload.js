import AWS from "aws-sdk";
import { v1 } from "uuid";

const OnFileUpload = (e) => {
  const ACCESS_KEY = process.env.REACT_APP_S3_ACCESS_KEY;
  const SECRET_ACCESS_KEY = process.env.REACT_APP_S3_SECRET_KEY;
  const REGION = process.env.REACT_APP_S3_DEFAULT_REGION;
  const S3_BUCKET = process.env.REACT_APP_S3_AWS_BUCKET;

  // AWS ACCESS KEY를 세팅합니다.
  AWS.config.update({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
  });

  // 버킷에 맞는 이름과 리전을 설정합니다.
  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const file = e.target.files[0];

  // 파일과 파일이름을 넘겨주면 됩니다.
  const params = {
    ACL: "public-read",
    Body: file,
    Bucket: S3_BUCKET,
    Key: file.name,
  };

  myBucket
    .putObject(params)
    .on("httpUploadProgress", (evt) => {})
    .send((err) => {
      if (err) console.log(err);
    });
};
export default OnFileUpload;
