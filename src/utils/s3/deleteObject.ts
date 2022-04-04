import AWS from 'aws-sdk'
const s3 = new AWS.S3({})

const deleteObject = (key: string) => {
  s3.deleteObject({
    Bucket: process.env.S3_BUCKET as string,
    Key: key
  }, () => { })
}

export default deleteObject
