import AWS from 'aws-sdk'
const s3 = new AWS.S3({})

const putObject = (file: Express.Multer.File, key: string) => {
  s3.putObject({
    Body: file.buffer,
    Bucket: process.env.S3_BUCKET as string,
    Key: key,
    ContentType: file.mimetype
  }, () => { })
}

export default putObject
