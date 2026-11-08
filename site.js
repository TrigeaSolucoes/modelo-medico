(() => {
  const base = document.querySelector("#agendar-modalidade");
  document.querySelectorAll('input[name="modalidade"]').forEach((input) => {
    input.addEventListener("change", () => {
      const modalidade = document.querySelector('input[name="modalidade"]:checked').value;
      const mensagem = modalidade === "presencial"
        ? "Olá, gostaria de agendar uma consulta presencial com o Dr. Henrique Lobo."
        : "Olá, gostaria de saber sobre agendamento de teleconsulta com o Dr. Henrique Lobo.";
      base.href = `${base.dataset.base.split("?")[0]}?text=${encodeURIComponent(mensagem)}`;
    });
  });

  const busca = document.querySelector("#busca-convenio");
  const itens = [...document.querySelectorAll("#lista-convenios li")];
  const resultado = document.querySelector("#resultado-busca");
  busca.addEventListener("input", () => {
    const termo = busca.value.trim().toLocaleLowerCase("pt-BR");
    let encontrados = 0;
    itens.forEach((item) => {
      const corresponde = item.dataset.nome.includes(termo);
      item.hidden = !corresponde;
      if (corresponde) encontrados += 1;
    });
    resultado.textContent = termo && !encontrados ? "Não encontramos esse nome na lista. A equipe pode orientar sobre recibo e reembolso." : "";
  });
})();
