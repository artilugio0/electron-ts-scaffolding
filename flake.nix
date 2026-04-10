{
  description = "TS shell";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

  outputs = { nixpkgs, ... } :
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_24

          libGL
          glib
          gtk3
          nss
          nspr
          atk
          at-spi2-atk
          cups
          dbus
          libdrm
          mesa  # for libGL
          libx11
          libxcomposite
          libxdamage
          libxext
          libxfixes
          libxrandr
          libxcb
          expat
          fontconfig
          freetype
          libxkbcommon
          udev
          alsa-lib
          cairo
          pango
          libgbm
        ];

        LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath (with pkgs; [
          libGL
          glib
          gtk3
          nss
          nspr
          atk
          at-spi2-atk
          cups
          dbus
          libdrm
          mesa  # for libGL
          libx11
          libxcomposite
          libxdamage
          libxext
          libxfixes
          libxrandr
          libxcb
          expat
          fontconfig
          freetype
          libxkbcommon
          udev
          alsa-lib
          cairo
          pango
          libgbm
        ]);

        shellHook = ''
          export PATH="$(pwd)/node_modules/.bin:$PATH"
        '';
      };
    };
}
