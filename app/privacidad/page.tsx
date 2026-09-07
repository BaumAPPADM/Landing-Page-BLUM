import type { Metadata } from 'next';
import LegalPage, { legalStyles as L } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Política de privacidad · blum',
  description: 'Cómo blum (CyG Riego SpA) trata los datos personales de quienes usan la app y la plataforma web.',
  alternates: { canonical: '/privacidad' },
};

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad y protección de datos personales" updated="7 de septiembre de 2026">
      <p style={L.p}>
        La presente Política de Privacidad informa a los usuarios sobre el tratamiento de los datos personales que se recolectan a
        través de la aplicación móvil y la plataforma web <strong>blum</strong> (anteriormente BaumApp / BaumSystem; en adelante, la
        “Plataforma”), en cumplimiento de la Ley N.º 19.628 sobre protección de la vida privada, la Ley N.º 21.719 que regula la
        protección y el tratamiento de los datos personales, sus modificaciones y demás normativa aplicable.
      </p>

      <h2 style={L.h2}>1. Responsable del tratamiento</h2>
      <p style={L.p}>
        El responsable del tratamiento de los datos personales proporcionados a través de la Plataforma (el “Responsable”) es
        <strong> CyG Riego SpA</strong>, Rol Único Tributario 76.715.365-1, con domicilio en Santiago, Chile.
      </p>

      <h2 style={L.h2}>2. Datos personales que tratamos</h2>
      <p style={L.p}>
        El Responsable trata los datos personales (información vinculada o referida a una persona natural identificada o identificable)
        que usted haya comunicado o que haya obtenido legítimamente en el uso de la Plataforma. En concreto:
      </p>
      <h3 style={L.h3}>2.1 Datos de cuenta e identificación</h3>
      <p style={L.p}>
        Nombre, apellido, correo electrónico, teléfono, cargo y empresa a la que pertenece, entregados al crear la cuenta (por usted o
        por la empresa cliente que lo habilita como usuario), al comunicarse con nosotros o al solicitar información. Si inicia sesión
        con Google o Apple, recibimos de ese proveedor el nombre y el correo asociados a la cuenta que usted autoriza.
      </p>
      <h3 style={L.h3}>2.2 Datos de operación de riego</h3>
      <p style={L.p}>
        Mediciones, eventos, tareas, visitas, levantamientos, fotografías y comentarios que usted registra sobre los equipos, sectores
        y bloques de riego del campo. Estos registros quedan asociados a su usuario (autor, fecha y hora) y pertenecen a la empresa
        cliente titular del campo.
      </p>
      <h3 style={L.h3}>2.3 Ubicación</h3>
      <p style={L.p}>
        Con su autorización, la app usa la ubicación del dispositivo para mostrar su posición en el mapa del campo, asociar cada
        medición o evento al lugar donde se registró y, si usted lo habilita, registrar el recorrido de una visita en terreno aun con
        la pantalla apagada (ubicación en segundo plano). Puede revocar este permiso en cualquier momento desde la configuración del
        dispositivo; algunas funciones dejarán de estar disponibles.
      </p>
      <h3 style={L.h3}>2.4 Cámara y fotografías</h3>
      <p style={L.p}>
        Con su autorización, la app accede a la cámara para fotografiar inspecciones y para escanear los códigos QR de los equipos.
        Las fotografías se almacenan asociadas al registro correspondiente.
      </p>
      <h3 style={L.h3}>2.5 Bluetooth</h3>
      <p style={L.p}>
        Con su autorización, la app usa Bluetooth (BLE) únicamente para detectar y leer sensores de medición cercanos cuando usted
        inicia una lectura. No se usa para rastrear su ubicación ni otros dispositivos.
      </p>
      <h3 style={L.h3}>2.6 Datos técnicos y de navegación</h3>
      <p style={L.p}>
        Los sistemas que operan la Plataforma registran, durante su funcionamiento normal, datos como fecha y hora de acceso,
        dirección IP, tipo de dispositivo, sistema operativo, versión de la app e identificadores técnicos necesarios para el envío
        de notificaciones. Su transmisión está implícita en el uso de los protocolos de comunicación y se usa para operar, asegurar y
        mejorar el servicio.
      </p>
      <p style={L.p}>Los datos personales se tratan manualmente y/o con el apoyo de medios informáticos.</p>

      <h2 style={L.h2}>3. Base de licitud del tratamiento</h2>
      <p style={L.p}>
        El tratamiento se funda en el consentimiento expreso, previo, inequívoco, libre e informado del titular; en la ejecución del
        contrato de servicio suscrito con la empresa cliente que lo habilita como usuario; y/o en la ley.
      </p>

      <h2 style={L.h2}>4. Finalidades del tratamiento</h2>
      <ul style={L.ul}>
        <li style={L.li}>Permitir el uso de todas las funciones de la Plataforma.</li>
        <li style={L.li}>Verificar su correcto funcionamiento, seguridad y disponibilidad.</li>
        <li style={L.li}>Enviarle correos y notificaciones propias del servicio: activación de cuenta, recuperación de contraseña, alertas de mediciones fuera de rango, eventos, tareas y resúmenes.</li>
        <li style={L.li}>Dar respuesta a consultas o solicitudes del interesado.</li>
        <li style={L.li}>Fines estadísticos, siempre que los datos se conserven de forma agregada y sea imposible identificar a sus titulares.</li>
      </ul>

      <h2 style={L.h2}>5. Comunicación a terceros y proveedores</h2>
      <p style={L.p}>Los datos recabados no se comunicarán a terceros, salvo que:</p>
      <ul style={L.ul}>
        <li style={L.li}>La comunicación sea necesaria para prestar el servicio, y ese tercero cumpla con las garantías necesarias sobre protección de datos.</li>
        <li style={L.li}>Se trate de datos estadísticos, agregados y anónimos.</li>
        <li style={L.li}>Se realice en cumplimiento de un mandato legal o un requerimiento judicial.</li>
      </ul>
      <p style={L.p}>Para operar la Plataforma utilizamos los siguientes proveedores, que actúan por cuenta del Responsable:</p>
      <ul style={L.ul}>
        <li style={L.li}><strong>Google Cloud Platform</strong> (Google LLC): alojamiento de la aplicación, la base de datos y los archivos, en la región de Santiago, Chile.</li>
        <li style={L.li}><strong>Amazon Web Services</strong> (Amazon SES): envío de los correos electrónicos del servicio, en Estados Unidos.</li>
        <li style={L.li}><strong>Google Maps Platform</strong>: mapas satelitales sobre los que se dibujan los sectores y bloques del campo.</li>
        <li style={L.li}><strong>Google Sign-In</strong> y <strong>Apple Sign in</strong>: inicio de sesión opcional con cuentas de esos proveedores.</li>
        <li style={L.li}><strong>Apple App Store</strong> y <strong>Google Play</strong>: distribución de la app móvil.</li>
      </ul>

      <h2 style={L.h2}>6. Transferencia internacional</h2>
      <p style={L.p}>
        Sus datos personales se tratan y almacenan principalmente en Chile. El envío de correos electrónicos del servicio se realiza
        a través de servidores ubicados en Estados Unidos. Cualquier transferencia internacional se efectúa con proveedores que
        ofrecen garantías contractuales de protección de datos equivalentes a las exigidas por la legislación chilena.
      </p>

      <h2 style={L.h2}>7. Período de conservación</h2>
      <p style={L.p}>
        Los datos personales se tratarán durante el tiempo necesario para cumplir las finalidades indicadas, mientras su cuenta esté
        activa y, después, durante los plazos que exija la normativa aplicable. Los datos de operación de riego se conservan por el
        tiempo que la empresa cliente mantenga contratado el servicio, por ser parte de su historial operativo.
      </p>

      <h2 style={L.h2}>8. Derechos de los titulares</h2>
      <p style={L.p}>Los titulares de datos personales cuentan con los siguientes derechos:</p>
      <ul style={L.ul}>
        <li style={L.li}><strong>Acceso:</strong> saber si sus datos están siendo tratados y, en su caso, acceder a ellos.</li>
        <li style={L.li}><strong>Rectificación:</strong> solicitar que se modifiquen datos inexactos, desactualizados o incompletos.</li>
        <li style={L.li}><strong>Supresión o cancelación:</strong> solicitar la eliminación de sus datos cuando se haya revocado el consentimiento y no exista otra base lícita, cuando el tratamiento resulte ilícito o cuando los datos resulten caducos.</li>
        <li style={L.li}><strong>Oposición:</strong> solicitar que no se lleve a cabo un tratamiento determinado.</li>
        <li style={L.li}><strong>Portabilidad:</strong> obtener una copia de sus datos en un formato estructurado y de uso común.</li>
      </ul>

      <h2 style={L.h2}>9. Eliminación de la cuenta</h2>
      <div style={L.note}>
        Puede solicitar la eliminación de su cuenta y de sus datos personales escribiendo a{' '}
        <a href="mailto:contacto@blumapps.com">contacto@blumapps.com</a> desde el correo asociado a la cuenta. La solicitud se
        procesa dentro de 30 días. Los registros de operación de riego que usted haya creado permanecen en el historial de la
        empresa cliente, desvinculados de sus datos identificativos, salvo que la ley exija su conservación.
      </div>

      <h2 style={L.h2}>10. Seguridad</h2>
      <p style={L.p}>
        El Responsable cuenta con políticas y medidas técnicas y organizativas adecuadas para proteger los datos personales contra
        el acceso no autorizado, la pérdida, la destrucción accidental, el daño y el uso o divulgación ilegal o no autorizada:
        cifrado en tránsito, control de acceso por usuario y rol, y revisiones y mejoras continuas de la infraestructura.
      </p>

      <h2 style={L.h2}>11. Contacto</h2>
      <p style={L.p}>
        Para cualquier duda sobre esta política o para ejercer los derechos que la ley le confiere, escriba a{' '}
        <a href="mailto:contacto@blumapps.com">contacto@blumapps.com</a>.
      </p>

      <h2 style={L.h2}>12. Cambios a esta política</h2>
      <p style={L.p}>
        El Responsable podrá modificar esta política. Los cambios se publicarán en esta página y, cuando sean relevantes, se
        comunicarán a los usuarios a través de la Plataforma, solicitando su autorización expresa si la ley lo exige.
      </p>
    </LegalPage>
  );
}
