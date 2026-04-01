import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-coffee-50 text-coffee-900 pt-24 pb-20 px-6 md:px-24">
      <div className="mx-auto max-w-3xl">

        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-coffee-500 hover:text-coffee-900 transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase">Torna alla Home</span>
        </button>

        <h1 className="font-serif text-4xl md:text-5xl mb-4">Privacy Policy</h1>
        <p className="text-coffee-500 text-sm mb-12">Ultimo aggiornamento: aprile 2025</p>

        <div className="space-y-10 text-coffee-700 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-coffee-900 mb-3">1. Titolare del trattamento</h2>
            <p>
              Il titolare del trattamento dei dati è <strong>Caffè Alex</strong>, con sede ad Avezzano (AQ), Abruzzo, Italia.<br />
              Email di contatto: <a href="mailto:caricola.alessandro@gmail.com" className="underline hover:text-coffee-900">caricola.alessandro@gmail.com</a><br />
              Telefono: <a href="tel:+393394458758" className="underline hover:text-coffee-900">+39 339 445 8758</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-coffee-900 mb-3">2. Dati raccolti</h2>
            <p>
              Il presente sito web ha natura <strong>informativa e di vetrina</strong>. Non raccoglie dati personali tramite form, registrazioni o account utente.
            </p>
            <p className="mt-3">
              L'unico dato che può essere trasmesso in modo automatico ai server di Google è l'<strong>indirizzo IP</strong> dell'utente, a causa del caricamento dei font tramite Google Fonts. Questo trasferimento avviene nel momento in cui si accede al sito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-coffee-900 mb-3">3. Cookie</h2>
            <p>Il sito utilizza esclusivamente cookie tecnici di prima parte, necessari al funzionamento:</p>
            <div className="mt-4 border border-coffee-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-coffee-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold">Nome</th>
                    <th className="text-left px-4 py-3 font-bold">Tipo</th>
                    <th className="text-left px-4 py-3 font-bold">Scopo</th>
                    <th className="text-left px-4 py-3 font-bold">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-coffee-200">
                    <td className="px-4 py-3 font-mono text-xs">caffe_alex_cookie_consent</td>
                    <td className="px-4 py-3">Tecnico</td>
                    <td className="px-4 py-3">Salva la preferenza cookie dell'utente</td>
                    <td className="px-4 py-3">Persistente (localStorage)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              Non vengono utilizzati cookie di profilazione, analytics o marketing di terze parti.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-coffee-900 mb-3">4. Base giuridica del trattamento</h2>
            <p>
              Il trattamento dei dati tecnici avviene sulla base del <strong>legittimo interesse</strong> del titolare per garantire il corretto funzionamento del sito (art. 6, par. 1, lett. f del GDPR).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-coffee-900 mb-3">5. Conservazione dei dati</h2>
            <p>
              I dati tecnici di navigazione non vengono conservati dal titolare. La preferenza cookie viene salvata localmente nel browser dell'utente e può essere eliminata in qualsiasi momento cancellando i dati di navigazione.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-coffee-900 mb-3">6. Diritti dell'utente</h2>
            <p>Ai sensi del GDPR (Reg. UE 2016/679), l'utente ha diritto di:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Accedere ai propri dati personali',
                'Richiederne la rettifica o la cancellazione',
                'Opporsi al trattamento',
                'Richiedere la limitazione del trattamento',
                'Proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-px bg-coffee-400 block shrink-0 mt-3"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Per esercitare i propri diritti è possibile contattare il titolare all'indirizzo:{' '}
              <a href="mailto:caricola.alessandro@gmail.com" className="underline hover:text-coffee-900">
                caricola.alessandro@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-coffee-900 mb-3">7. Modifiche alla presente policy</h2>
            <p>
              Il titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con aggiornamento della data in cima al documento.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
