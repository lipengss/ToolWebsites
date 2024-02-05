interface PictureState {
  file: {
    name: string
    size: string
  }
  textarea: string | ArrayBuffrt | null,
  radio: 'base64' | 'binary'
}