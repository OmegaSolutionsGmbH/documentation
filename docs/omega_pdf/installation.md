<script setup lang="ts">
import DownloadCard from '../components/DownloadCard';

const downloads = [
  {
    value: 'BC28',
    label: 'Business Central 28.0',
    url: 'https://cloud.omegasol.at/owncloud/index.php/apps/files/ajax/download.php?dir=%2F%2FHR Updates ab BC24 CloudReady%2F04 BC27 CloudReady%2F03 HR 26.02.01 Hotfix&files=HR 26.02.01 Hotfix BC 27 Cloud Ready.zip',
  },
  {
    value: 'BC27',
    label: 'Business Central 27.0',
    url: 'https://downloads.omegasol.at/api/downloads/hr/26.02.01',
  },
  {
    value: 'BC26',
    label: 'Business Central 26.0',
    url: 'https://downloads.omegasol.at/api/downloads/hr/25.12',
  },
]

</script>

# Installation

## Voraussetzungen

- Berechtigung zum Installieren von Erweiterungen
- Gültige Omega Lizenz

## App installieren

<DownloadCard
  title="Omega-PDF Installation"
  description="Bitte wählen Sie die gewünschte Version aus."
  placeholder="Bitte wählen"
  :options="downloads"
/> 
