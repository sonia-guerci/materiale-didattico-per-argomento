const ricerca_indicizzata = function(A, n, v, h) {
  const i = h(v);
  if (A[i] === v)
    return i;
  else
    return NON_PRESENTE;
};
