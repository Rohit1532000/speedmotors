<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Keep this single-page business website in the index route with reusable section components; menus scroll to sections rather than creating duplicate pages.
- Store service content in a browser-safe data module and use bundled photographs for service cards; this keeps presentation and content rules independently testable.
- Contact submission and CTA destinations remain presentation-only placeholders until a working destination is explicitly requested.
