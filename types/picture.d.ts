interface PictureState {
  file: {
    name: string
    size: number
    list: UploadUserFile[]
  }
  textarea: string | ArrayBuffrt | null,
  radio: 'base64' | 'binary'
}