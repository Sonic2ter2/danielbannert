import type { FC } from "react";

import GridBackground from "../components/grid_background";
import Link from "../components/link";

const ImpressPage: FC = () => (
    <GridBackground>
        <section className="relative container mx-auto px-4 lg:px-8 py-12 mx-auto space-y-8 overflow-hidden">
            <div className="container prose prose-lg dark:prose-invert">
                <h1>Impressum</h1>
                <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
                <p>
                    Daniel Bannert
                    <br />
                    Bäckergasse 37
                    <br />
                    D-93059 Regensburg
                </p>
                <h3>Kontakt</h3>
                <p>
                    Telefon: +49 (0) 175 7322833
                    <br />
                    E-Mail: d.bannert@anolilab.de
                </p>
                <h3>Streitschlichtung</h3>
                <p>
                    Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <Link href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                        https://ec.europa.eu/consumers/odr
                    </Link>
                    .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                <h3>Haftung f&uuml;r Inhalte</h3>{" "}
                <p>
                    Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte
                    fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.
                </p>{" "}
                <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt.
                    Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei
                    Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>{" "}
                <h3>Haftung f&uuml;r Links</h3>{" "}
                <p>
                    Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r
                    diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                    oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
                    Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>{" "}
                <p>
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                    Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>{" "}
                <h3>Urheberrecht</h3>{" "}
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                    Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der
                    schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht
                    kommerziellen Gebrauch gestattet.
                </p>{" "}
                <p>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
                    Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                    entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
            </div>
        </section>
    </GridBackground>
);

export default ImpressPage;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const documentProps = {
    title: "Impressum - Daniel Bannert",
    pageUrl: "/impress",
};
