/**
 * Se realiza un restablecimiento de contraseña, solicitado mediante el email y
 * obteniendo el token a travez del id del cliente
 */

/**
 * VULNERABILIDAD
 * Ataque de inyección de encabezado host
 * Se usa el encabezado host basicamente como uno de los parametros de esta URL
 * Pero esto en realidad esta bajo el control de la persona que realiza la solicitud
 * lo que hace un posible control del atacante
 */

app.post("generate-pwd-reset-url", async function (req, res) {
  // assume the customer exists
  const customer = await customerdb.findOne(req.body.email);

  const resetToken = await genPwdResetToken(customer._id);

  /*
  const resetPwdUrl = `${req.header(
    "host"
  )}/passwordReset?token=${resetToken}&id=${custom._id}`;
  */

  /**
   * SOLUCION
   * La URL como variable de entorno, asi evitamos la inyección en el encabezado
   */
  const resetPwdUrl = `${procecs.env.HOST_URL}/passwordReset?token=${resetToken}&id=${custom._id}`;

  return res.json({ resetPwdUrl: resetPwdUrl });
});
