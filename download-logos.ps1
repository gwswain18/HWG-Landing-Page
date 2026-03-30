# Download carrier logos to public/carriers/
# Run from project root: powershell -ExecutionPolicy Bypass -File download-logos.ps1

$dir = "public/carriers"
if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force }

$logos = @(
    @{
        Name = "transamerica"
        Url  = "https://cdn.cookielaw.org/logos/188c9eba-5804-46c2-a61e-494d10f126a9/019465dc-6b6e-75fe-bbc0-16bca321a15f/b08a08f4-9046-4faa-b6ed-f3be0b19b269/ta-logo_primary_large.png"
        Ext  = "png"
    },
    @{
        Name = "aetna"
        Url  = "https://www.aetna.com/content/dam/aetna/images/logos/Aetna_Logo_ss_Violet_RGB_Coated.svg"
        Ext  = "svg"
    },
    @{
        Name = "aflac"
        Url  = "https://cdn.cookielaw.org/logos/8dab0070-0617-4485-8a8c-5ccb4e1e9edc/018ee255-03e3-72c1-81b2-d190b619aaec/6e1b7f49-b666-4185-bcf7-d0fce28a55a6/aflac-header-logo.png"
        Ext  = "png"
    },
    @{
        Name = "corebridge"
        Url  = "https://www.corebridgefinancial.com/content/experience-fragments/marketing/corporate/en/corporate_site_new/header/master1/_jcr_content/root/container_1377145813/image.coreimg.svg/1686950809617/corebridge-financial-rgb-600x200.svg"
        Ext  = "svg"
    },
    @{
        Name = "americo"
        Url  = "https://www.americo.com/wp-content/uploads/2020/10/cropped-Americologo_red_289-2.png"
        Ext  = "png"
    },
    @{
        Name = "sbli"
        Url  = "https://wp.sbli.com/wp-content/uploads/2025/06/SBLI_Wordmark_Blue-300x85-1.png"
        Ext  = "png"
    },
    @{
        Name = "royal-neighbors"
        Url  = "https://www.royalneighbors.org/wp-content/uploads/2025/03/logo.svg"
        Ext  = "svg"
    },
    @{
        Name = "cvs"
        Url  = "https://www.cvshealth.com/content/dam/enterprise/cvs-enterprise/logos/CVS_Health_logo.svg"
        Ext  = "svg"
    },
    @{
        Name = "cica"
        Url  = "https://www.citizensinc.com/wp-content/uploads/2023/06/CICA-Life-1.svg"
        Ext  = "svg"
    },
    @{
        Name = "american-amicable"
        Url  = "https://www.americanamicable.com/v4/images/americanamicable-logo-secondary-navy.png"
        Ext  = "png"
    }
)

$webClient = New-Object System.Net.WebClient
$webClient.Headers.Add("User-Agent", "Mozilla/5.0")

foreach ($logo in $logos) {
    $outFile = "$dir/$($logo.Name).$($logo.Ext)"
    Write-Host "Downloading $($logo.Name)..." -NoNewline
    try {
        $webClient.DownloadFile($logo.Url, $outFile)
        $size = (Get-Item $outFile).Length
        Write-Host " OK ($size bytes)" -ForegroundColor Green
    } catch {
        Write-Host " FAILED: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Mutual of Omaha uses an inline SVG - download from their broker page
$mooUrl = "https://cdn.mutualofomaha.com/mutualofomaha/images/moo-logo-primary-blue.svg"
Write-Host "Downloading mutual-of-omaha..." -NoNewline
try {
    $webClient.DownloadFile($mooUrl, "$dir/mutual-of-omaha.svg")
    $size = (Get-Item "$dir/mutual-of-omaha.svg").Length
    Write-Host " OK ($size bytes)" -ForegroundColor Green
} catch {
    # Try alternate URL
    try {
        $mooUrl2 = "https://cdn.mutualofomaha.com/mutualofomaha/images/logos/moo-logo.svg"
        $webClient.DownloadFile($mooUrl2, "$dir/mutual-of-omaha.svg")
        $size = (Get-Item "$dir/mutual-of-omaha.svg").Length
        Write-Host " OK ($size bytes)" -ForegroundColor Green
    } catch {
        Write-Host " FAILED - download manually from mutualofomaha.com" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Done! Check $dir/ for downloaded logos." -ForegroundColor Cyan
Write-Host "If any failed, you can right-click the logo on the carrier's website and 'Save Image As'." -ForegroundColor Yellow

$webClient.Dispose()
