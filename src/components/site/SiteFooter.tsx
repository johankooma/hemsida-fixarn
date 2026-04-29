import logo from "@/assets/kooma-logo.png";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <img
              src={logo}
              alt="Kooma Engineering"
              width={180}
              height={40}
              className="h-9 w-auto mb-5"
            />
            <p className="text-sm text-ink-soft max-w-sm leading-relaxed">
              Erfaren ingenjörspartner inom mätteknik, tester och
              validering för svensk industri.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-ink mb-4">Tjänster</h3>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><a href="#tjanster" className="hover:text-ink">Mätteknik</a></li>
              <li><a href="#tjanster" className="hover:text-ink">Tester & Validering</a></li>
              <li><a href="#tjanster" className="hover:text-ink">Ingenjörskonsulter</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-ink mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><a href="mailto:info@kooma.se" className="hover:text-ink">info@kooma.se</a></li>
              <li><a href="tel:+4684000000" className="hover:text-ink">+46 8 400 00 00</a></li>
              <li>Stockholm, Sverige</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} Kooma Engineering AB. Alla rättigheter förbehållna.</p>
          <p>Org.nr 556xxx-xxxx</p>
        </div>
      </div>
    </footer>
  );
};
