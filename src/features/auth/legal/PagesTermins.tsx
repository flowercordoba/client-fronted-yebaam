
const PagesTermins = () => {
  return (
    <><p className="text-gray-500 text-xs mb-4">
      Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Facebook.{' '}
      <a href="https://www.facebook.com/help/637205020878504" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Obtén más información.</a>
    </p><p className="text-gray-500 text-xs mb-4">
        Al hacer clic en "Registrarte", aceptas nuestras{' '}
        <a href="/terms" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Condiciones</a>, la{' '}
        <a href="/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Política de privacidad</a> y la{' '}
        <a href="/cookies-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Política de cookies</a>. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.
      </p></>  );
};

export default PagesTermins;