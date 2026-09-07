import type { Metadata } from 'next';
import LegalPage, { legalStyles as L } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Términos y condiciones · blum',
  description: 'Condiciones de uso de la aplicación móvil y la plataforma web blum, de CyG Riego SpA.',
  alternates: { canonical: '/terminos' },
};

export default function Terminos() {
  return (
    <LegalPage title="Términos y condiciones de uso" updated="7 de septiembre de 2026">
      <p style={L.p}>
        Estos términos regulan el uso de la aplicación móvil y la plataforma web <strong>blum</strong> (anteriormente BaumApp /
        BaumSystem; en adelante, la “Plataforma”), operadas por <strong>CyG Riego SpA</strong>, Rol Único Tributario 76.715.365-1
        (“blum” o “nosotros”). Al crear una cuenta o usar la Plataforma, usted acepta estos términos y la{' '}
        <a href="/privacidad">Política de privacidad</a>.
      </p>

      <h2 style={L.h2}>1. Qué es la Plataforma</h2>
      <p style={L.p}>
        blum permite registrar, desde terreno y desde la web, las mediciones, eventos, tareas, visitas y levantamientos de los
        sistemas de riego y fertirriego de un campo, y consultarlos en mapas, tableros, alertas e informes. La Plataforma es una
        herramienta de registro y análisis: <strong>las decisiones de riego, fertilización y mantención son responsabilidad de quien
        las toma</strong>.
      </p>

      <h2 style={L.h2}>2. Cuentas y acceso</h2>
      <ul style={L.ul}>
        <li style={L.li}>Las cuentas se crean por la empresa cliente que contrata el servicio (el “Cliente”) o por invitación de esta. Cada cuenta es personal e intransferible.</li>
        <li style={L.li}>Usted es responsable de mantener la confidencialidad de sus credenciales y de toda actividad realizada con su cuenta. Avísenos de inmediato ante cualquier uso no autorizado.</li>
        <li style={L.li}>El Cliente puede habilitar, limitar o dar de baja usuarios de su organización en cualquier momento.</li>
        <li style={L.li}>Debe ser mayor de 18 años para usar la Plataforma.</li>
      </ul>

      <h2 style={L.h2}>3. Uso aceptable</h2>
      <p style={L.p}>Se compromete a no:</p>
      <ul style={L.ul}>
        <li style={L.li}>Registrar datos falsos o manipular mediciones, eventos o fotografías.</li>
        <li style={L.li}>Acceder a campos, equipos o datos de otros Clientes sin autorización.</li>
        <li style={L.li}>Intentar vulnerar la seguridad de la Plataforma, extraer datos de forma automatizada o interferir con su funcionamiento.</li>
        <li style={L.li}>Usar la Plataforma para fines ilícitos o distintos de la gestión del riego del campo al que tiene acceso.</li>
      </ul>

      <h2 style={L.h2}>4. Datos del campo y propiedad de la información</h2>
      <ul style={L.ul}>
        <li style={L.li}>Los datos de operación que se registran en la Plataforma (mediciones, eventos, fotografías, levantamientos, configuración de equipos) son de propiedad del Cliente titular del campo.</li>
        <li style={L.li}>El Cliente otorga a blum una licencia no exclusiva para almacenar, procesar y mostrar esos datos con el único fin de prestar el servicio, y para elaborar estadísticas agregadas y anónimas que no permitan identificar al Cliente ni a sus usuarios.</li>
        <li style={L.li}>El Cliente puede solicitar una exportación de sus datos mientras el servicio esté vigente y hasta 60 días después de su término.</li>
      </ul>

      <h2 style={L.h2}>5. Propiedad intelectual</h2>
      <p style={L.p}>
        La Plataforma, su código, diseño, marcas, logotipos y contenidos son de propiedad de CyG Riego SpA o de sus licenciantes.
        Estos términos no le otorgan más derechos que el uso de la Plataforma conforme a ellos. No puede copiar, modificar,
        distribuir, descompilar ni crear obras derivadas de la Plataforma.
      </p>

      <h2 style={L.h2}>6. Disponibilidad, soporte y cambios</h2>
      <ul style={L.ul}>
        <li style={L.li}>Trabajamos para que la Plataforma esté disponible de forma continua, pero no garantizamos disponibilidad ininterrumpida. Puede haber interrupciones por mantención, actualizaciones o causas ajenas a nuestro control.</li>
        <li style={L.li}>La app móvil permite registrar datos sin conexión y sincronizarlos después; es responsabilidad del usuario sincronizar antes de que el dispositivo pierda los datos.</li>
        <li style={L.li}>Podemos modificar, agregar o retirar funciones de la Plataforma. Los cambios relevantes se informarán a través de la Plataforma o por correo.</li>
        <li style={L.li}>El soporte se presta a través de <a href="mailto:contacto@blumapps.com">contacto@blumapps.com</a> y de los canales acordados con el Cliente.</li>
      </ul>

      <h2 style={L.h2}>7. Servicios de terceros</h2>
      <p style={L.p}>
        La Plataforma integra servicios de terceros (mapas de Google, inicio de sesión con Google o Apple, datos de clima, sensores y
        caudalímetros de otros proveedores). Su uso está sujeto a los términos de cada proveedor y blum no responde por su
        exactitud ni disponibilidad. Apple Inc. y Google LLC no son parte de estos términos ni responsables de la Plataforma.
      </p>

      <h2 style={L.h2}>8. Limitación de responsabilidad</h2>
      <p style={L.p}>
        La Plataforma se entrega “tal cual”. En la máxima medida permitida por la ley, blum no responde por daños indirectos, lucro
        cesante, pérdida de cosecha, de datos o de oportunidades derivados del uso o la imposibilidad de uso de la Plataforma, ni
        por decisiones agronómicas u operativas tomadas a partir de la información registrada o mostrada en ella. La
        responsabilidad total de blum frente al Cliente se limita al monto pagado por el servicio en los doce meses anteriores al
        hecho que la origine.
      </p>

      <h2 style={L.h2}>9. Suspensión y término</h2>
      <p style={L.p}>
        Podemos suspender o dar de baja una cuenta que infrinja estos términos o ponga en riesgo la seguridad de la Plataforma.
        El Cliente puede terminar el servicio conforme a su contrato. Usted puede solicitar la eliminación de su cuenta según lo
        indicado en la <a href="/privacidad">Política de privacidad</a>.
      </p>

      <h2 style={L.h2}>10. Ley aplicable y jurisdicción</h2>
      <p style={L.p}>
        Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia se someterá a los tribunales
        ordinarios de justicia de la ciudad de Santiago.
      </p>

      <h2 style={L.h2}>11. Contacto</h2>
      <p style={L.p}>
        CyG Riego SpA · <a href="mailto:contacto@blumapps.com">contacto@blumapps.com</a> ·{' '}
        <a href="https://www.blumapps.com">www.blumapps.com</a>
      </p>
    </LegalPage>
  );
}
