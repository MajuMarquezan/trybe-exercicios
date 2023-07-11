const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];

const cadastroDeEmail = (email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
}

emailListInData.forEach((item) => {
    cadastroDeEmail(item);
})