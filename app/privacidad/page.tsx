import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo FORJA Training Club recopila, usa y protege tus datos personales.",
  robots: { index: false, follow: true },
};

export default function Privacidad() {
  return (
    <LegalShell title="Política de Privacidad" updated="7 de junio de 2026">
      <p>
        En {site.fullName} valoramos tu privacidad. Esta política explica qué
        datos recopilamos, con qué fin y cuáles son tus derechos, en cumplimiento
        de la Ley 25.326 de Protección de Datos Personales de la República
        Argentina.
      </p>

      <h2>1. Qué datos recopilamos</h2>
      <p>
        Recopilamos los datos que nos brindás voluntariamente a través de
        nuestros formularios de contacto y canales de WhatsApp: nombre, número de
        teléfono y, opcionalmente, tu objetivo de entrenamiento. No solicitamos
        datos sensibles a través del sitio.
      </p>

      <h2>2. Para qué usamos tus datos</h2>
      <ul>
        <li>Responder tus consultas y coordinar tu clase de prueba.</li>
        <li>Informarte sobre planes, promociones y novedades del gimnasio.</li>
        <li>Mejorar nuestros servicios y la experiencia en el sitio.</li>
      </ul>

      <h2>3. Conservación y seguridad</h2>
      <p>
        Conservamos tus datos sólo durante el tiempo necesario para cumplir con
        las finalidades descritas. Aplicamos medidas técnicas y organizativas
        razonables para protegerlos contra accesos no autorizados.
      </p>

      <h2>4. Compartir con terceros</h2>
      <p>
        No vendemos ni cedemos tus datos personales a terceros. Sólo podríamos
        compartirlos cuando una norma legal así lo requiera.
      </p>

      <h2>5. Tus derechos</h2>
      <p>
        Podés acceder, rectificar o solicitar la eliminación de tus datos
        escribiéndonos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. La Agencia de Acceso a
        la Información Pública es el órgano de control de la Ley 25.326.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Ante cualquier duda sobre esta política, escribinos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> o visitanos en{" "}
        {site.address}.
      </p>
    </LegalShell>
  );
}
