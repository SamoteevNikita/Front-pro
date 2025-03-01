function pow(num, degree) {
  if (degree === 0) {
    return 1
  }
  if (degree > 0) {
    return num * pow(num, degree -1)
  }

}

console.log (pow(2, 4))