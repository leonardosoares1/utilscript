interface ICpfDTO  {
  defaultValue?: string;
  value?: string ;
}

function cpf({ defaultValue = '', value }: ICpfDTO): string {
  if (!value) {
    return defaultValue;
  }

  const valueWithoutMask = value.replace(/[^0-9]/g, '');

  const cpfFormatted = valueWithoutMask
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2');

  return cpfFormatted;
}

export default { cpf };