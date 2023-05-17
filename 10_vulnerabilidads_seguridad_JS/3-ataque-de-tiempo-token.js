/**
 * PROBLEMA - Vulnerabilidad ataque de tiempo
 * Tenemos la información proporcionada por el usuario que especifica algún tipo de cuenta
 * y queremos verificar si la información proporcionada por el usuario tiene o no algun
 * tipo de token secreto que coincida con el token secreto de la cuenta que esta registrada
 *
 * Si el token enviado es ABC y token a comparar es DEF retornara rápidamente false
 * Pero si el token es ABC y token a comparar ACB el sistema toma un tiempo ya que encuentra
 * cierta coincidencia y es aquí donde el hacker detectaria teniendo tiempo que hay un ciclo
 * de demora y así se podria usar fuerza bruta sincronizada, ya que cada vez que surga menos
 * tiempo indica que se aproxima a coincidir el token
 */

/**
 * SOLUCIÓN importar la libreria crypto
 */
import crypto from "crypto";

export function checkToken(userSupplied) {
  const account = account.retrieveToken(userSupplied);

  if (account) {
    //if (account.service.token === user.service.token) {
    //  return true;
    //}
    if (crypto.timingSafeEqual(account.service.token, user.service.token)) {
      return true;
    }
  }
  return false;
}
